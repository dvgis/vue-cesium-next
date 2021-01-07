<template>
  <div class="home">
    <div id="viewer-container" class="viewer-container"></div>
  </div>
</template>

<script>
import ViewerApi from '@/api/ViewerApi'
export default {
  name: 'Home',
  methods: {
    initViewer() {
      let viewerApi = new ViewerApi('viewer-container')
      viewerApi.addBaseLayer()
      global.viewerApi = viewerApi
    }
  },
  mounted() {
    this.initViewer()
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .viewer-container {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
}
</style>
