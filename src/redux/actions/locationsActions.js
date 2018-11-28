import axios from 'axios'
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_STATES = 'FETCH_STATES'
export const FETCH_AFRICA = 'FETCH_AFRICA'
export const FETCH_ASIA = 'FETCH_ASIA'
export const FETCH_EUROPE = 'FETCH_EUROPE'
export const FETCH_OCEANIA = 'FETCH_OCEANIA'
export const FETCH_SOUTHAMERICA = 'FETCH_SOUTHAMERICA'
export const FETCH_NORTHAMERICA = 'FETCH_NORTHAMERICA'


export const fetchLocations = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations')
      .then(res => res.json())
      .then(locations => {
        dispatch({
        type: FETCH_LOCATIONS,
        payload: locations
      })
    })
  }
}

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

export const fetchAfrica = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/africa')
      .then(res => res.json())
      .then(africa => {
        dispatch({
        type: FETCH_AFRICA,
        payload: africa
      })
    })
  }
}

export const fetchAsia = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/asia')
      .then(res => res.json())
      .then(asia => {
        dispatch({
        type: FETCH_ASIA,
        payload: asia
      })
    })
  }
}


export const fetchEurope = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/europe')
      .then(res => res.json())
      .then(europe => {
        dispatch({
        type: FETCH_EUROPE,
        payload: europe
      })
    })
  }
}


export const fetchOceania = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/oceania')
      .then(res => res.json())
      .then(oceania => {
        dispatch({
        type: FETCH_OCEANIA,
        payload: oceania
      })
    })
  }
}

export const fetchNorthAmerica = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/northamerica')
      .then(res => res.json())
      .then(northamerica => {
        dispatch({
        type: FETCH_NORTHAMERICA,
        payload: northamerica
      })
    })
  }
}

export const fetchSouthAmerica = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/locations/southamerica')
      .then(res => res.json())
      .then(southamerica => {
        dispatch({
        type: FETCH_SOUTHAMERICA,
        payload: southamerica
      })
    })
  }
}
