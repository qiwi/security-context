// @flow

import type {IDetails, IAuthentication, IAuthorities, IPrincipal} from './interface'

export default class Authentication implements IAuthentication {
  principal: IPrincipal
  authorities: ?IAuthorities
  details: ?IDetails
  authenticated: boolean

  constructor (principal: IPrincipal, authorities: ?IAuthorities, details: ?IDetails): IAuthentication {
    this.authenticated = false
    this.principal = principal
    this.authorities = authorities
    this.details = details

    return this
  }
}
