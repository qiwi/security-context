// @flow

import type {IDetails, IAuthentication, IAuthorities, IPrincipal} from './interface'

/**
 * @class Authentication
 */
export default class Authentication implements IAuthentication {
  principal: IPrincipal
  authorities: ?IAuthorities
  details: ?IDetails
  authenticated: boolean

  /**
   * @param {IPrincipal} principal
   * @param {IAuthorities} [authorities]
   * @param {*} [details]
   * @return {IAuthentication}
   * @property {IPrincipal} principal
   * @property {IAuthorities} [authorities]
   * @property {*} [details]
   */
  constructor (principal: IPrincipal, authorities: ?IAuthorities, details: ?IDetails): IAuthentication {
    this.authenticated = false
    this.principal = principal
    this.authorities = authorities
    this.details = details

    return this
  }
}
