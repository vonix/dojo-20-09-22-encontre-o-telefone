import getnumber from '../../src/getnumber.js'

describe('getnumber', () => {
  it('Get a number from this letter: T', () => {
    expect(getnumber('T')).toBe('8')
  })

  it('Get a number from this letter: E', () => {
    expect(getnumber('E')).toBe('3')
  })

  it('Get a number from this letter: TE', () => {
    expect(getnumber('TE')).toBe('83')
  })

  it('Get a number from this letter: DEF', () => {
    expect(getnumber('DEF')).toBe('333')
  })
})
