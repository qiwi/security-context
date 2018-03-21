// @flow

import type {IRole} from './interface'

export const AUTHORITY_TYPE: string = 'ROLE'

export default class Role implements IRole {
  value: string
  type: string

  constructor (value: string): IRole {
    this.value = value
    this.type = AUTHORITY_TYPE

    return this
  }
}
