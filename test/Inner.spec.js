import { shallowMount } from '@vue/test-utils'
import Inner from '@/pages/Inner.vue'

describe('Inner', () => {
  it('counts right number', () => {
    const countStep = 20
    const wrapper = shallowMount(Inner,)

    wrapper.vm.$emit('count', 20)
    expect(wrapper.emitted().count[0]).toEqual([20])
  })
})
