import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'


export const fetchCountries = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    })
  }
}
