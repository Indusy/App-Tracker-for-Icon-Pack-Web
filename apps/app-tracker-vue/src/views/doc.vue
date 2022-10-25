<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
  docName: string;
}>();
const { docName } = toRefs(props);

const docUrl = computed(() => `/${docName.value}.md`);
const content = ref<string>('');

async function fetchMarkdown() {
  const res = await fetch(docUrl.value);
  if (res.status === 404) {
    content.value = `404 文件不存在！`;
  } else {
    content.value = await res.text();
  }
}

watch(
  docName,
  () => {
    fetchMarkdown();
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div id="doc" v-html="marked.parse(content)"></div>
</template>
