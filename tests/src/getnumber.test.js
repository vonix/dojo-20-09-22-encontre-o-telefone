import getnumber from '../../src/getnumber.js'

describe('getnumber', () => {
    it('Get a number from this letters: Test', () => {
      expect(getnumber('T')).toBe(8)
    })
  })