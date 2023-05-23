/**
  @Author: Caven Chen
  @Date: 2023-05-23
**/

import * as Cesium from '@cesium/engine'
import { Viewer, BaseLayerPicker } from '@/exts'
import { AmapImageryProvider } from '@dvgis/cesium-map'

class ViewerApi {
  constructor(container) {
    this._viewer = new Viewer(container)
    this._viewerWidget = document.createElement('div')
    this._viewerWidget.className = 'viewer-widget'
    this._viewer.container.appendChild(this._viewerWidget)
    this._baseLayerPicker = new BaseLayerPicker({
      globe: this._viewer.scene.globe,
    })
  }

  get viewer() {
    return this._viewer
  }

  get viewerWidget() {
    return this._viewerWidget
  }

  addBaseLayer() {
    this._baseLayerPicker.addImageryLayer(
      new Cesium.ImageryLayer(
        new AmapImageryProvider({ style: 'img', crs: 'WGS84' })
      )
    )
    this._baseLayerPicker.changeImageryLayer(0)
    return this
  }
}

export default ViewerApi
