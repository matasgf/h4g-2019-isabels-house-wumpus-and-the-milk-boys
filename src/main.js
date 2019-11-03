import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
 
import Paginate from 'vuejs-paginate'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component('paginate', Paginate)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA3n660Vlzu3QtlXb_SfIgDVF627-i4fog',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
