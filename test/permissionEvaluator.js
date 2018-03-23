import PermissionEvaluator, {DEFAULT_STRATEGY} from '../src/permissionEvaluator'
import {AbstractAuthentication} from '../src/authentication'

class Authentication extends AbstractAuthentication {}

describe('permissionEvaluator', () => {
  describe('construtor', () => {
    it('properly constructs plain instance', () => {
      const evaluator = new PermissionEvaluator()

      expect(evaluator).toBeInstanceOf(PermissionEvaluator)
      expect(evaluator.evaluators).toBeUndefined()
    })

    it('constructs composed evaluator', () => {
      const evaluator = new PermissionEvaluator()
      const composed = new PermissionEvaluator([evaluator])

      expect(evaluator).toBeInstanceOf(PermissionEvaluator)
      expect(composed.evaluators[0]).toBe(evaluator)
    })
  })

  describe('proto', () => {
    const principal = {login: 'foo'}
    const authorities = []
    const details = {}
    const auth = new Authentication(principal, authorities, details)
    const target = {foo: 'bar'}

    describe('supports', () => {
      it('handles any permission type by default', () => {
        const evaluator = new PermissionEvaluator()
        const permission = 'Foo'

        expect(evaluator.supports(permission)).toBeTruthy()
      })
    })

    describe('hasPermission', () => {
      it('returns `DEFAULT_STRATEGY` as default result', () => {
        const evaluator = new PermissionEvaluator()

        expect(evaluator.hasPermission(auth, target, details)).toBe(DEFAULT_STRATEGY)
      })

      describe('composed', () => {
        it('returns `DEFAULT_STRATEGY` if no inner capable evaluator found', () => {
          const evaluator = new PermissionEvaluator()
          const composed = new PermissionEvaluator([evaluator])

          evaluator.supports = () => false
          expect(composed.hasPermission(auth, target, details)).toBe(DEFAULT_STRATEGY)
        })

        it('returns true if at least one permission was granted', () => {
          const evaluator1 = new PermissionEvaluator()
          const evaluator2 = new PermissionEvaluator()
          const evaluator3 = new PermissionEvaluator()
          const composed = new PermissionEvaluator([evaluator1, evaluator2, evaluator3])

          evaluator3.hasPermission = () => true
          expect(composed.hasPermission(auth, target, details)).toBeTruthy()
        })

        it('returns `DEFAULT_STRATEGY` if no permission granted', () => {
          const evaluator = new PermissionEvaluator()
          const composed = new PermissionEvaluator([evaluator])

          expect(composed.hasPermission(auth, target, details)).toBe(DEFAULT_STRATEGY)
        })
      })
    })
  })
})
