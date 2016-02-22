import { CHANGE_TAB } from '../actionTypes'

export default (state = {} , action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.payload
    default: return state
  }
}
