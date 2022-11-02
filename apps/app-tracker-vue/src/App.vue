<script lang="ts" setup>
import { API_URL } from '@/constants/app-meta';

console.log(API_URL);
console.log(import.meta.env);
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
