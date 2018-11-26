import axios from 'axios'
export const FETCH_CAMERAS = 'FETCH_CAMERAS'


export const fetchCameras = () => {
  return dispatch =>  {
    fetch('http://localhost:8082/api/cameras')
      .then(res => res.json())
      .then(cameras => {
        dispatch({
        type: FETCH_CAMERAS,
        payload: cameras
      })
    })
  }
}

export const addToCart = (camera) => {
  return {
    type: ADD_TO_CART,
    payload: camera
  }
}
