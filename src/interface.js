// @flow

export type IAny = any

export type IPrincipal = Object

export interface IAuthority {
  constructor(value: string): IAuthority;
  value: string;
}
export type IAuthorities = Array<IAuthority>

export interface IRole extends IAuthority{
  constructor(value: string): IRole;
  type: string;
}
export type IPermission = IAny
export type ICredentials = IAny
export type IUserPasswordCredentials = {
  username: string;
  password: string;
}
export type ITarget = IAny
export type ITargetType = string
export type IDetails = IAny

export interface IAuthentication {
  constructor(principal: IPrincipal, credentials: ?ICredentials, authorities: ?IAuthorities, details: ?IDetails): IAuthentication;
  authenticated: boolean;
  principal: IPrincipal;
  credentials?: ?ICredentials;
  authorities: ?IAuthorities;
  details: ?IDetails;
}

export interface IToken extends IAuthentication {
  constructor(
    principal: IPrincipal,
    authorities: ?IAuthorities,
    details: ?IDetails,
    credentials: ?ICredentials
  ): IToken;

  get type(): string;
}

export interface IUsernamePasswordToken extends IToken {
  constructor(
    principal: IPrincipal,
    credentials: IUserPasswordCredentials,
    authorities: ?IAuthorities,
    details: ?IDetails
  ): IUsernamePasswordToken;
}

export interface IPermissionEvaluator {
  evaluators: ?Array<IPermissionEvaluator>;
  constructor(evaluators?: ?Array<IPermissionEvaluator>): IPermissionEvaluator;
  hasPermission(auth: IAuthentication, target: ITarget, permission: IPermission, targetType?: ?ITargetType): boolean;
  supports(IPermission): boolean
}
export type IPermissionEvaluators = Array<IPermissionEvaluator>

