import axios from 'axios'
export const FETCH_BUCKETS = 'FETCH_BUCKETS'

export const fetchBuckets = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/buckets')
      .then(res => res.json())
      .then(buckets => {
        dispatch({
        type: FETCH_BUCKETS,
        payload: buckets
      })
    })
  }
}
