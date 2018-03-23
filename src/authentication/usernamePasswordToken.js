// @flow

import AbstractToken from './abstractToken'
import type {IUserPasswordToken} from '../interface'

const TYPE = 'USERNAME_PASSWORD_TOKEN'

export default class UsernamePasswordToken extends AbstractToken implements IUserPasswordToken {
  static TYPE = TYPE
}
