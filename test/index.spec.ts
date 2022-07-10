import foo from './foo'
describe('init', () => {
  test('sum', () => {
    console.log(foo())
    expect(1 + 2).toBe(3)
  })
})
