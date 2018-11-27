import { FETCH_COUNTRIES } from '../actions/locationsActions'
import { FETCH_STATES } from '../actions/locationsActions'

export default (state = {countries: [], states: []}, action) => {
  switch (action.type) {

    case FETCH_COUNTRIES:
      return {...state, countries:action.payload}

    case FETCH_STATES:
      return {...state, states:action.payload}

    default:
      return state
  }
}
