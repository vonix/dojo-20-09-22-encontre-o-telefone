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
  it('Ignore 1 and -', () => {
    expect(getnumber('1-DEF')).toBe('1-333')
  })
  it('Ignore special caracter', () => {
    expect(getnumber('1-ÁEF')).toBe('1-33')
  })
})
