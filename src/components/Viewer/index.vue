<template>
  <div :id="viewerId" :class="className"></div>
</template>

<script>
export default {
  name: 'Viewer',
  props: {
    viewerId: {
      type: String,
      default: 'viewer-container'
    },
    className: {
      type: String,
      default: 'viewer-container'
    }
  },
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new Cesium.Viewer(this.viewerId, {
        animation: false, //Whether to create animated widgets, lower left corner of the meter
        baseLayerPicker: false, //Whether to display the layer selector
        imageryProvider: false, // Whether to display the default imagery
        fullscreenButton: false, //Whether to display the full-screen button
        geocoder: false, //To display the geocoder widget, query the button in the upper right corner
        homeButton: false, //Whether to display the Home button
        infoBox: false, //Whether to display the information box
        sceneModePicker: false, //Whether to display 3D/2D selector
        selectionIndicator: false, //Whether to display the selection indicator component
        timeline: false, //Whether to display the timeline
        navigationHelpButton: false, //Whether to display the help button in the upper right corner
        navigationInstructionsInitiallyVisible: false,
        creditContainer: undefined,
        shouldAnimate: true
      })
      viewer.cesiumWidget._creditContainer.style.display = 'none'
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      )
      viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT
      this.$emit('on-viewer-created', viewer)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initViewer()
    })
  }
}
</script>

<style lang="scss" scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
</style>
