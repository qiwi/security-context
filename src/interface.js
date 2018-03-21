// @flow

type IAny = any

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
export type IAuth = IAny
export type IPermission = IAny
export type ITarget = IAny
export type ITargetType = string

export interface IPermissionEvaluator {
  evaluators: ?Array<IPermissionEvaluator>;
  constructor(evaluators?: ?Array<IPermissionEvaluator>): IPermissionEvaluator;
  hasPermission(auth: IAuth, target: ITarget, permission: IPermission, targetType?: ?ITargetType): boolean;
  supports(IPermission): boolean
}
export type IPermissionEvaluators = Array<IPermissionEvaluator>

export type IDetails = IAny
export interface IAuthentication {
  constructor(principal: IPrincipal, authorities: ?IAuthorities, details: ?IDetails): IAuthentication;
  principal: IPrincipal;
  authorities: ?IAuthorities;
  details: ?IDetails;
  authenticated: boolean;
}
