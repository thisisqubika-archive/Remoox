import { LOAD_TABS } from '../actionTypes'

export default (state = {} , action) => {
  switch (action.type) {
    case LOAD_TABS:
      return action.payload
    default: return state
  }
}
