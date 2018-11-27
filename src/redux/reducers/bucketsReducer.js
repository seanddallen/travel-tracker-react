import { FETCH_BUCKETS } from '../actions/bucketsActions'

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_BUCKETS:
      return action.payload

    default:
      return state
  }
}
