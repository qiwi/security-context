// @flow

import type {IDetails, IAuthentication, IAuthorities, IPrincipal} from './../interface'

/**
 * @class AbstractAuthentication
 * @abstract
 */
export default class AbstractAuthentication implements IAuthentication {
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
    if (this.constructor === AbstractAuthentication) {
      throw new Error('abstract cannot be instantiated')
    }

    this.authenticated = false
    this.principal = principal
    this.authorities = authorities
    this.details = details

    return this
  }
}
