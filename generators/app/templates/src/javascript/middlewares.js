import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

let middlewares = [reduxThunk, createLogger()]

export default middlewares
