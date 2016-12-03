# Redux Duet

Because actions and handlers belong together.

## Quick Start

Redux Duet lets you colocate actions, handlers, and types, and removes
a considerable amount of boilerplate but keeps flexibility and fine grained
opportunities for composition by stopping there.

Like with plain Redux, you can still grab an action and drop it somewhere else, a handler, or
take the same code and give it a different type to promote reducer code sharing
and flexible namespacing.

Here's how it looks like:

```javascript
const { action: deleteUserAction, handler: deleteUserHandler } = duet(
  'users/DELETE',
  (state, action) => state.deleteIn(['users', action.payload])
)
export { deleteUserAction }

const { action: saveUserAction, handler: saveUserHandler } = duet(
  'users/SAVE',
  (state, action) => {
    const user = action.payload
    return state.mergeIn(['users', user.id], user)
  },
)
export { saveUserAction }
```

And here it is for a `redux-promise-middleware` based code:

```javascript
const { action: statusActionPromise, handler: statusActionHandler } = duet(
  'users/STATUS',
  () => fetch('https://status.github.com/api.json'),
  {
    pending: (state, action) => state.set('loading', true),
    fulfilled: (state, action) => state
                                    .set('loading', false)
                                    .set('loaded', Date.now()),
  }
)
export { statusActionPromise }
```

Here's how you make a reducer from discrete handlers:

```javascript
export const reducerMap = Object.assign({},
  statusActionHandler,
  saveUserHandler,
  deleteUserHandler,
)
export default createReducer(initialState, reducerMap)
```

The `reducerMap` is exported to promote tighter unit tests,
and using discrete handlers allows for a reducer map concept
in the first place.


## API

Redux Duet uses `redux-actions` for flux standard actions.

```javascript
const { action, handler } = duet(
  <KEY/TYPE>,
  <ACTION PAYLOAD CREATOR>,
  <HANDLER | HANDLERMAP>
)
```

You can omit the action payload creator (as with `redux-actions`) to
get an identity creator.

```javascript
const { action, handler } = duet(
  <KEY/TYPE>,
  <HANDLER | HANDLERMAP>
)
```

A handler is a reducer function `(state, action)=>state`. A
handler map is a map of reducer functions where each key will
be a postfix, so `fulfilled` becomes `KEY_FULFILLED`.

One special key is `started` which will be swapped with bare
`KEY` if you need it. If you still need to use a `_STARTED` postfix,
use a key named `_started`.

You can see more exampes in the [tests](src/__tests__).

# Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).


### Thanks:

To all [Contributors](https://github.com/jondot/redux-duet/graphs/contributors) - you make this happen, thanks!


# Copyright

Copyright (c) 2016 [Dotan Nahum](http://gplus.to/dotan) [@jondot](http://twitter.com/jondot). See [LICENSE](LICENSE.txt) for further details.
