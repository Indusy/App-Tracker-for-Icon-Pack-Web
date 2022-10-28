<script lang="ts" setup>
import { APP_MODE } from '@/constants/app-meta';
</script>

<template>
  <div id="home">
    <h1>
      <span style="text-decoration: underline">App Tracker</span> in
      {{ APP_MODE }} env.
    </h1>
    <doc-link name="server-doc">App Tracker 服务端文档</doc-link>
  </div>
</template>
