# security-context [RnD]

Basic utils for security context providing.

##### Install
```bash
    npm i -S @qiwi/security-context    
```

##### Usage concept
```javascript
    import {Role, Authentication, PermissionEvaluator} from '@qiwi/security-context'

    // Create role as basic Authority
    const admin = new Role('admin')
    const operator = new Role('operator')
    
    // Configure your evaluator
    class CustomEvaluator extends PermissionEvaluator {
      constructor() {
        super()
      }
      hasPermission(auth, target, permission) {
        const roles = auth.authorities
        
        if (roles.contains(admin)) {
          return true
        }
        
        if (roles.contains(operator)) {
          if (permission === 'owner') {
            if (target.owner_id === auth.principal.id) {
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
        const auth = new Authentication(
          user,
          data.roles.map(v => new Role(v)),
          data.details
        )
        auth.authenticated = true

      })
      .catch(e => {
        return new Authentication(user)
      })
      
    // Then pass auth to context and resolve permission where it's needed
    const doSomething = (target, ...args) => {
      if (evaluator.hasPermission(auth, target, 'owner')) {
        // ...
      }
    }
```