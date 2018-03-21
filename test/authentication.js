import Authentication from '../src/authentication'

describe('authentication', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const principal = {login: 'foo'}
      const authorities = []
      const details = {}

      const auth = new Authentication(principal, authorities, details)

      expect(auth).toBeInstanceOf(Authentication)
      expect(auth.principal).toBe(principal)
      expect(auth.authorities).toBe(authorities)
      expect(auth.details).toBe(details)
      expect(auth.authenticated).toBeFalsy()
    })
  })
})
