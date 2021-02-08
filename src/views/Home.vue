<template>
  <div class="home">
    <viewer @on-viewer-created="onViewerCreated"></viewer>
  </div>
</template>

<script>
import ViewerApi from '@/api/ViewerApi'

export default {
  name: 'Home',
  methods: {
    onViewerCreated(viewer) {
      let viewerApi = new ViewerApi(viewer)
      viewerApi.addBaseLayer()
      global.viewerApi = viewerApi
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
</style>
