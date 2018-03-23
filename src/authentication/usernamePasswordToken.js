// @flow

import AbstractToken from './abstractToken'
import type {IUsernamePasswordToken, IAny} from '../interface'

const TYPE = 'USERNAME_PASSWORD_TOKEN'

/**
 * @class UsernamePasswordToken
 * @extends AbstractToken
 */
export default class UsernamePasswordToken extends AbstractToken implements IUsernamePasswordToken {
  /**
   * @public
   * @constructor
   * @param {IPrincipal} principal
   * @param {IUsernamePasswordToken} credentials
   * @param {IAuthorities} [authorities]
   * @param {*} [details]
   * @return {IAuthentication}
   * @property {IPrincipal} principal
   * @property {IAuthorities} [authorities]
   * @property {IUsernamePasswordToken} credentials
   * @property {*} [details]
   */
  constructor (...args: IAny) {
    super(...args)

    return this
  }

  /**
   * @type {string}
   */
  static TYPE = TYPE
}
