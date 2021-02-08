/**
 * @Author: Caven
 * @Date: 2021-01-07 21:35:04
 */

class ViewerApi {
  constructor(viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }

  addBaseLayer() {
    this.viewer.imageryLayers.addImageryProvider(
      new Cesium.AmapImageryProvider({
        style: 'img',
        crs: 'WGS84'
      })
    )
    return this
  }
}

export default ViewerApi
