import { describe, it } from 'mocha'
import { expect } from 'chai'
import { randomItem } from '.'

const arr = ['a', 'b', 'c', 'd', 'e']

describe('Arrays', () => {
  describe('randomItem', () => {
    it('should return random items', () => {
      for (let i = 0; i < 50; i++) {
        const item = randomItem(arr)
        expect(arr).to.include(item)
      }
    })
  })
})
