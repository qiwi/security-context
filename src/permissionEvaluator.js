// @flow

import type {
  IAuthentication,
  IPermission,
  ITarget,
  ITargetType,
  IPermissionEvaluator,
  IPermissionEvaluators
} from './interface'

export const DEFAULT_STRATEGY = false

/**
 * @class PermissionEvaluator
 */
export default class PermissionEvaluator implements IPermissionEvaluator {
  evaluators: ?IPermissionEvaluators

  /**
   * @param {PermissionEvaluator[]} [evaluators]
   * @returns {PermissionEvaluator}
   * @property {PermissionEvaluator[]} [evaluators]
   */
  constructor (evaluators?: ?IPermissionEvaluators): IPermissionEvaluator {
    this.evaluators = evaluators

    return this
  }

  /**
   * @method hasPermission
   * @param {Authentication} auth
   * @param {*} target
   * @param {*} permission
   * @param {string} [targetType]
   * @return {boolean}
   */
  hasPermission (auth: IAuthentication, target: ITarget, permission: IPermission, targetType?: ?ITargetType): boolean {
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
   * @param {*} permission
   * @return {boolean}
   */
  supports (permission: IPermission): boolean {
    return true
  }
}
