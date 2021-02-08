/**
 * @Author: Caven
 * @Date: 2020-12-24 20:33:49
 */

import axios from 'axios'
import { createApp } from 'vue'
;(async () => {
  await axios.get('config/config.json').then(res => {
    global.Config = res.data
    Object.freeze(global.Config)
  })
  Promise.all([
    import('./App.vue'),
    import('./router'),
    import('./store'),
    import('./loader')
  ]).then(
    ([
      { default: App },
      { default: router },
      { default: store },
      { default: appLoader }
    ]) => {
      const app = createApp(App)
      app.config.productionTip = false
      app.use(router)
      app.use(store)
      app.use(appLoader)
      app.mount('#app')
    }
  )
})()
