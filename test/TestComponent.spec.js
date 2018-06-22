import { shallowMount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent.vue'

describe('TestComponent', () => {
  const wrapper = shallowMount(TestComponent)
  const button = wrapper.find('button')

  it('should render correct contents', () => {
    expect(button.textContent).toMatchSnapshot();
  });

  it('counts right number', () => {
    wrapper.setProps({countStep: 20})
    button.trigger('click')
    expect(wrapper.vm.count).toBe(20)
  })
})
