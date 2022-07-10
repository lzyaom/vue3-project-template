import foo from './foo'
import { mount } from '@vue/test-utils'
import Hello from '@/components/HelloWorld.vue'
describe('init', () => {
  test('sum', () => {
    console.log(mount(Hello))
    console.log(foo())
    expect(1 + 2).toBe(3)
  })
})
