/**
 * @Author: Caven
 * @Date: 2020-12-24 12:59:51
 */

import httpLoader from './HttpLoader'
import uiLoader from './UiLoader'
import compLoader from './CompLoader'
import svgIconLoader from './SvgIconLoader'

class AppLoader {
  install(app) {
    app.use(httpLoader)
    app.use(uiLoader)
    app.use(compLoader)
    app.use(svgIconLoader)
  }
}

const appLoader = new AppLoader()

export default appLoader
