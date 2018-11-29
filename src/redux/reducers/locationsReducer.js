import { FETCH_LOCATION } from '../actions/locationsActions'
import { FETCH_LOCATIONS } from '../actions/locationsActions'

import { FETCH_COUNTRIES } from '../actions/locationsActions'
import { FETCH_STATES } from '../actions/locationsActions'
import { FETCH_ASIA } from '../actions/locationsActions'
import { FETCH_AFRICA } from '../actions/locationsActions'
import { FETCH_EUROPE } from '../actions/locationsActions'
import { FETCH_OCEANIA } from '../actions/locationsActions'
import { FETCH_NORTHAMERICA } from '../actions/locationsActions'
import { FETCH_SOUTHAMERICA } from '../actions/locationsActions'

export default (state = {location: [], locations: []}, action) => {
  switch (action.type) {

    case FETCH_LOCATION:
      return {...state, location:action.payload}

    case FETCH_LOCATIONS:
      return {...state, locations:action.payload}

    case FETCH_COUNTRIES:
      return {...state, countries:action.payload}

    case FETCH_STATES:
      return {...state, states:action.payload}

    case FETCH_AFRICA:
      return {...state, africa:action.payload}

    case FETCH_ASIA:
      return {...state, asia:action.payload}

    case FETCH_EUROPE:
      return {...state, europe:action.payload}

    case FETCH_OCEANIA:
      return {...state, oceania:action.payload}

    case FETCH_NORTHAMERICA:
      return {...state, northamerica:action.payload}

    case FETCH_SOUTHAMERICA:
      return {...state, southamerica:action.payload}

    default:
      return state
  }
}
