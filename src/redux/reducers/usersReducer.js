import { FETCH_CAMERAS } from '../actions/camerasActions'

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_CAMERAS:
      return action.payload

    default:
      return state
  }
}
