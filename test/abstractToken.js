import {AbstractToken} from '../src/authentication'

describe('abstractToken', () => {
  describe('constructor', () => {
    it('is abstract', () => {
      expect(() => new AbstractToken()).toThrow('abstract cannot be instantiated')
    })

    it('returns proper instance', () => {
      class Token extends AbstractToken {
        static TYPE = 'Foo'
      }

      const principal = {login: 'foo'}
      const authorities = []
      const details = {}

      const token = new Token(principal, authorities, details)

      expect(token).toBeInstanceOf(AbstractToken)
      expect(token.principal).toBe(principal)
      expect(token.authorities).toBe(authorities)
      expect(token.details).toBe(details)
      expect(token.authenticated).toBeFalsy()
      expect(token.type).toBe('Foo')
    })
  })
})
