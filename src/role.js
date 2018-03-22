// @flow

import type {IRole} from './interface'

export const AUTHORITY_TYPE: string = 'ROLE'

/**
 * @class Role
 */
export default class Role implements IRole {
  value: string
  type: string

  /**
   * @param {string} value
   * @returns {Role}
   * @property {string} value
   */
  constructor (value: string): IRole {
    this.value = value
    this.type = AUTHORITY_TYPE

    return this
  }
}
