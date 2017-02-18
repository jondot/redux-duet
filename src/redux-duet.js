import { createAction } from 'redux-actions'
import _ from 'lodash'
const sep = '_'

function promised(key, map){
  return _.mapKeys(map, function(v, k){
    return '' + key + postfix(k)
  })
}
export { promised }

function postfix(key){
  const str = key.toString().toUpperCase()
  if (str === 'STARTED'){
    return ''
  }
  if (str.startsWith(sep)){
    return str
  }
  return `${sep}${str}`
}

function duet(key, action, handler){
  // if user supplied just two params, then
  // action param is actually the handler
  const fsa = handler ? createAction(key, action)
                      : createAction(key)
  if (!handler){
    handler = action
  }

  if (typeof handler === 'function'){
    return {
      action: fsa,
      handler: {
        [key]: handler
      }
    }
  }

  return {
    action: fsa,
    handler: promised(key, handler)
  }
}

export default duet

