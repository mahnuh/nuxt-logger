import Vue from 'vue'
import VueLogger from 'vuejs-logger'

Vue.use(VueLogger, <%= serialize(options) %>)

export default function (ctx, inject) {
  inject('log', Vue.log)
}