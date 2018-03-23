import {AbstractAuthentication} from '../src/authentication'

describe('abstractAuthentication', () => {
  describe('constructor', () => {
    it('is abstract', () => {
      expect(() => new AbstractAuthentication()).toThrow('abstract cannot be instantiated')
    })

    it('returns proper instance', () => {
      class Auth extends AbstractAuthentication {}

      const principal = {login: 'foo'}
      const authorities = []
      const details = {}

      const auth = new Auth(principal, authorities, details)

      expect(auth).toBeInstanceOf(AbstractAuthentication)
      expect(auth.principal).toBe(principal)
      expect(auth.authorities).toBe(authorities)
      expect(auth.details).toBe(details)
      expect(auth.authenticated).toBeFalsy()
    })
  })
})
