import { combineReducers } from 'redux'

import count from './counter'
// import anotherCounter from './anotherReducer'

export default combineReducers({ count })

// Multiple reducers:
// export default combineReducers({ reducer, anotherReducer })
