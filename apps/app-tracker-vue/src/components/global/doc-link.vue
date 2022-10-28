<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<template>
  <router-link
    v-slot="{ navigate, href }"
    :to="{
      name: 'doc',
      query: {
        name,
      },
    }"
    custom
  >
    <a v-bind="$attrs" :href="href" target="_blank" @click="navigate">
      <slot></slot></a
  ></router-link>
</template>
