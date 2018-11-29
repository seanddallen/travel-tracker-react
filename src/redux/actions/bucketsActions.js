import axios from 'axios'
export const FETCH_BUCKETS = 'FETCH_BUCKETS'
export const ADD_BUCKET = 'ADD_BUCKET'
export const REMOVE_BUCKET = 'REMOVE_BUCKET'
export const CHECKOFF_BUCKET = 'CHECKOFF_BUCKET'

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

export const addBucket = (newBucket) => {
  console.log(newBucket)
  return async (dispatch) => {
    let bucket = await axios.post(`http://localhost:8000/addbucket/${newBucket.id}`, newBucket)
    console.log(bucket);
    dispatch({
      type: ADD_BUCKET,
      payload: bucket.data[0]
    })
  }
}

export const removeBucket = (bucket) => {
  console.log('reducer bucket', bucket)
  return async (dispatch) => {
    let thebucket = await axios.delete(`http://localhost:8000/removebucket/${bucket.id}`, bucket)
    dispatch({
      type: REMOVE_BUCKET,
      payload: bucket
    })
  }
}

export const checkoffBucket = (bucket) => {
  return async (dispatch) => {
    let thebucket = await axios.patch(`http://localhost:8000/checkoffbucket/${bucket.id}`, bucket)
    dispatch({
      type: CHECKOFF_BUCKET,
      payload: bucket
    })
  }
}
