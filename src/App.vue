<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script setup>
import ViewerApi from '@/api/ViewerApi'
import { onMounted } from 'vue'

onMounted(() => {
  global.viewerApi = new ViewerApi('viewer-container')
  global.viewerApi.addBaseLayer()
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.viewer-canvas,
.viewer-canvas canvas {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
