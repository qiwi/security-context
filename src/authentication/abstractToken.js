// @flow
import type {IToken, IAny} from '../interface'
import AbstractAuthentication from './abstractAuthentication'

const TYPE = 'ABSTRACT_TOKEN'

/**
 * @class AbstractToken
 * @abstract
 */
export default class AbstractToken extends AbstractAuthentication implements IToken {
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
  constructor (...args: IAny) {
    super(...args)

    if (this.constructor === AbstractToken) {
      throw new Error('abstract cannot be instantiated')
    }

    return this
  }
  static TYPE = TYPE
  get type (): string {
    return this.constructor.TYPE
  }
}
