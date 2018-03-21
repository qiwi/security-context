import {PermissionEvaluator, Role, Authentication} from '../src'

describe('index', () => {
  it('exports proper inners', () => {
    expect(PermissionEvaluator).not.toBeUndefined()
    expect(Role).not.toBeUndefined()
    expect(Authentication).not.toBeUndefined()
  })
})
