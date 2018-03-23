import {UsernamePasswordToken} from '../src/authentication'

describe('userPasswordToken', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const principal = {login: 'foo'}
      const credentials = {}
      const authorities = []
      const details = {}

      const token = new UsernamePasswordToken(principal, credentials, authorities, details)

      expect(token).toBeInstanceOf(UsernamePasswordToken)
      expect(token.principal).toBe(principal)
      expect(token.credentials).toBe(credentials)
      expect(token.authorities).toBe(authorities)
      expect(token.details).toBe(details)
      expect(token.authenticated).toBeFalsy()
      expect(token.type).toBe('USERNAME_PASSWORD_TOKEN')
    })
  })
})
