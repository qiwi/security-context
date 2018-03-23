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
  authorities: ?IAuthorities
  details: ?IDetails
  authenticated: boolean
  credentials: ?ICredentials

  /**
   * @param {IPrincipal} principal
   * @param {IAuthorities} [authorities]
   * @param {*} [details]
   * @param {*} [credentials]
   * @return {IAuthentication}
   * @property {IPrincipal} principal
   * @property {IAuthorities} [authorities]
   * @property {*} [details]
   * @property {*} [credentials]
   */
  constructor (principal: IPrincipal, authorities: ?IAuthorities, details: ?IDetails, credentials: ?ICredentials): IAuthentication {
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
