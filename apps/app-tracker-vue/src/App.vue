<script lang="ts" setup>
import { APP_MODE } from './constants/app-meta';
</script>

<template>
  <div>
    <h1>App Tracker in {{ APP_MODE }} env.</h1>
    <router-view></router-view>
  </div>
</template>
