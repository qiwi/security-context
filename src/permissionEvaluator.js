// @flow

import type {
  IAuth,
  IPermission,
  ITarget,
  ITargetType,
  IPermissionEvaluator,
  IPermissionEvaluators
} from './interface'

export const DEFAULT_STRATEGY = false

export default class PermissionEvaluator implements IPermissionEvaluator {
  evaluators: ?IPermissionEvaluators
  constructor (evaluators?: ?IPermissionEvaluators): IPermissionEvaluator {
    this.evaluators = evaluators

    return this
  }

  hasPermission (auth: IAuth, target: ITarget, permission: IPermission, targetType?: ?ITargetType): boolean {
    if (this.evaluators) {
      const targetEvaluators: IPermissionEvaluators = this.evaluators.filter(evaluator => evaluator.supports(permission))

      if (targetEvaluators.length === 0) {
        return DEFAULT_STRATEGY
      }

      return targetEvaluators.find(evaluator => evaluator.hasPermission(auth, target, permission, targetType))
        ? true
        : DEFAULT_STRATEGY
    }

    return DEFAULT_STRATEGY
  }

  /**
   * Checks if evaluator could process the permission
   * @returns {boolean}
   */
  supports (permission: IPermission): boolean {
    return true
  }
}
