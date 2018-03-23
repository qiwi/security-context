# security-context [RnD]

Basic utils for security context providing.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![buildStatus](https://img.shields.io/travis/qiwi/security-context.svg?maxAge=3600&branch=master)](https://travis-ci.org/qiwi/security-context)
[![coverage](https://img.shields.io/coveralls/qiwi/security-context.svg?maxAge=3600)](https://coveralls.io/github/qiwi/security-context)
[![dependencyStatus](https://img.shields.io/david/qiwi/security-context.svg?maxAge=3600)](https://david-dm.org/qiwi/security-context)
[![devDependencyStatus](https://img.shields.io/david/dev/qiwi/security-context.svg?maxAge=3600)](https://david-dm.org/qiwi/security-context)

##### Install
```bash
    npm i -S @qiwi/security-context    
```

##### Contracts
Inspired by [Spring](https://spring.io/)
* Authentication — basic auth iface
* *Token — custom auth impl
* Authority - represents an authority granted to an Authentication object.
* Role — basic authority type
* Permission — a representation of the permission object as supplied by the expression system

##### Usage concept
```javascript
    import {Role, AbstractToken, PermissionEvaluator} from '@qiwi/security-context'

    // Create role as basic Authority
    const admin = new Role('admin')
    const operator = new Role('operator')
    
    // Specify custom token logic
    class CustomToken extends AbstractToken {
      //...
    }
    
    // Configure your evaluator
    class CustomEvaluator extends PermissionEvaluator {
      constructor() {
        super()
      }
      hasPermission(token, target, permission) {
        const roles = token.authorities
        
        if (roles.contains(admin)) {
          return true
        }
        
        if (roles.contains(operator)) {
          if (permission === 'owner') {
            if (target.owner_id === token.principal.id) {
              return true
            }
          }
        }
        
        return false
      }
    }
    const evaluator = new PermissionEvaluator()
    
    // Handle auth event, build Auth instance
    const user = {
      login: 'foo'
    }
    fetch({/*...*/})
      .then(res => {
        const data = res.json()
        const token = new CustomToken(
          user,
          data.roles.map(v => new Role(v)),
          data.details
        )
        token.authenticated = true

      })
      .catch(e => {
        return new Authentication(user)
      })
      
    // Then pass auth to context and resolve permission where it's needed
    const doSomething = (target, ...args) => {
      if (evaluator.hasPermission(token, target, 'owner')) {
        // ...
      }
    }
```