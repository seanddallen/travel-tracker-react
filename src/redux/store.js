import {createStore, combineReducers} from 'redux'
import usersReducer from './reducers/usersReducer'
import locationsReducer from './reducers/locationsReducer'
import bucketsReducer from './reducers/bucketsReducer'
import postsReducer from './reducers/postsReducer'


const rootReducer = combineReducers({
  users: usersReducer,
  locations: locationsReducer,
  buckets: bucketsReducer,
  posts: postsReducer
})

export default rootReducer
