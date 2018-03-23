import {
  PermissionEvaluator,
  Role,
  AbstractAuthentication,
  AbstractToken,
  UsernamePasswordToken
} from '../src'

describe('index', () => {
  it('exports proper inners', () => {
    expect(PermissionEvaluator).not.toBeUndefined()
    expect(Role).not.toBeUndefined()
    expect(AbstractAuthentication).not.toBeUndefined()
    expect(AbstractToken).not.toBeUndefined()
    expect(UsernamePasswordToken).not.toBeUndefined()
  })
})
