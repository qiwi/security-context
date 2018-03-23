// @flow
import type {IToken, IAny} from '../interface'
import AbstractAuthentication from './abstractAuthentication'

const TYPE = 'ABSTRACT_TOKEN'

export default class AbstractToken extends AbstractAuthentication implements IToken {
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
