import { FETCH_COUNTRIES } from '../actions/locationsActions'
import { FETCH_STATES } from '../actions/locationsActions'

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_COUNTRIES:
      return action.payload

    case FETCH_STATES:
      return action.payload

    default:
      return state
  }
}
