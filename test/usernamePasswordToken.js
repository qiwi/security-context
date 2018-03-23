import {UsernamePasswordToken} from '../src/authentication'

describe('userPasswordToken', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const principal = {login: 'foo'}
      const authorities = []
      const details = {}

      const token = new UsernamePasswordToken(principal, authorities, details)

      expect(token).toBeInstanceOf(UsernamePasswordToken)
      expect(token.principal).toBe(principal)
      expect(token.authorities).toBe(authorities)
      expect(token.details).toBe(details)
      expect(token.authenticated).toBeFalsy()
      expect(token.type).toBe('USERNAME_PASSWORD_TOKEN')
    })
  })
})
