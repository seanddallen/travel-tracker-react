import { FETCH_BUCKETS, ADD_BUCKET, REMOVE_BUCKET, CHECKOFF_BUCKET } from '../actions/bucketsActions'

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_BUCKETS:
      return action.payload

    case ADD_BUCKET:
      return [...state , action.payload]

    case REMOVE_BUCKET:
      return [...state.filter(bucket => bucket.id !== action.payload.id)]

    case CHECKOFF_BUCKET:
      return state.map(bucket => bucket.id === action.payload.id ? action.payload : bucket)

    default:
      return state
  }
}
