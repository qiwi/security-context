import Role, {AUTHORITY_TYPE} from '../src/role'

describe('role', () => {
  it('constructs proper instance', () => {
    const value = 'Foo'
    const role = new Role(value)

    expect(role).toBeInstanceOf(Role)
    expect(role.value).toBe(value)
    expect(role.type).toBe(AUTHORITY_TYPE)
  })
})
