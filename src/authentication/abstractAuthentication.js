// @flow

import type {
  IDetails,
  IAuthentication,
  IAuthorities,
  IPrincipal,
  ICredentials
} from './../interface'

/**
 * @class AbstractAuthentication
 * @abstract
 */
export default class AbstractAuthentication implements IAuthentication {
  principal: IPrincipal
  credentials: ?ICredentials
  authorities: ?IAuthorities
  details: ?IDetails
  authenticated: boolean

  /**
   * @param {IPrincipal} principal
   * @param {*} [credentials]
   * @param {IAuthorities} [authorities]
   * @param {*} [details]
   * @return {IAuthentication}
   * @property {IPrincipal} principal
   * @property {*} [credentials]
   * @property {IAuthorities} [authorities]
   * @property {*} [details]
   */
  constructor (principal: IPrincipal, credentials: ?ICredentials, authorities: ?IAuthorities, details: ?IDetails): IAuthentication {
    if (this.constructor === AbstractAuthentication) {
      throw new Error('abstract cannot be instantiated')
    }

    this.authenticated = false
    this.principal = principal
    this.authorities = authorities
    this.details = details
    this.credentials = credentials

    return this
  }
}
