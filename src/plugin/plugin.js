import pluginComponent from './components/pluginComponent.vue'

let plugin = {}

// https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin
export default plugin.install = function (Vue, options) {
  Vue.component('PluginComponent', pluginComponent)

  Vue.myGlobalMethod = function () {
  }

  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
    }
  })

  Vue.mixin({
    created: function () {
    }
  })

  Vue.prototype.$myMethod = function (options) {
  }
}
