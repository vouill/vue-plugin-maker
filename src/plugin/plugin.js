import pluginComponent from './components/pluginComponent.vue'

let plugin = {}

// https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin
export default plugin.install = function (Vue, options) {
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

  Vue.component('PluginComponent', pluginComponent)
}

// Another way to export components of your plugin.
// You can do named export of specific component so in your front you only import them and nothing else
// In this case it's avaible under : import {NamedComponent} from 'yourplugin'
export const NamedComponent = pluginComponent
