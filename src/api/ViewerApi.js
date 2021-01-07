/**
 * @Author: Caven
 * @Date: 2021-01-07 21:35:04
 */

class ViewerApi {
  constructor(id) {
    this._viewer = new Cesium.Viewer(id, {
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
    this._viewer.cesiumWidget._creditContainer.style.display = 'none'
    this._viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    )
    this._viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT
  }

  get viewer() {
    return this._viewer
  }

  addBaseLayer() {
    this.viewer.imageryLayers.addImageryProvider(
      new Cesium.GoogleImageryProvider({
        style: 'img'
      })
    )
    return this
  }
}

export default ViewerApi
