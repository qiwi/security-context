import {PermissionEvaluator, Role, AbstractAuthentication} from '../src'

describe('index', () => {
  it('exports proper inners', () => {
    expect(PermissionEvaluator).not.toBeUndefined()
    expect(Role).not.toBeUndefined()
    expect(AbstractAuthentication).not.toBeUndefined()
  })
})
