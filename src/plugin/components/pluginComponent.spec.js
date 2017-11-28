import { mount } from 'vue-test-utils'
import pluginComponent from './pluginComponent.vue'

describe('pluginComponent', () => {
  it('should render component', () => {
    const wrapper = mount(pluginComponent)
    expect(wrapper).toMatchSnapshot()
  })
})
