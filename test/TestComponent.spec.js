import { shallowMount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent.vue'

describe('TestComponent', () => {
  it('counts right number', () => {
    const wrapper = shallowMount(TestComponent)
    const button = wrapper.find('button')

    wrapper.setProps({countStep: 20})
    button.trigger('click')
    expect(wrapper.vm.count).toBe(20)
  })
})
