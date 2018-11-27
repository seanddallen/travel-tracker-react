import axios from 'axios'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_STATES = 'FETCH_STATES'


export const fetchCountries = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/countries')
      .then(res => res.json())
      .then(countries => {
        dispatch({
        type: FETCH_COUNTRIES,
        payload: countries
      })
    })
  }
}

export const fetchStates = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/states')
      .then(res => res.json())
      .then(states => {
        dispatch({
        type: FETCH_STATES,
        payload: states
      })
    })
  }
}
