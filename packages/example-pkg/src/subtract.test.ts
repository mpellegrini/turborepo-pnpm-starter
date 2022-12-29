import { subtract } from './subtract.js'

describe('test add function', () => {
  it('should return 15 for add(10,5)', () => {
    expect.assertions(1)
    expect(subtract(10, 5)).toBe(5)
  })

  it('should return 5 for add(2,3)', () => {
    expect.assertions(1)
    expect(subtract(2, 3)).toBe(-1)
  })
})
