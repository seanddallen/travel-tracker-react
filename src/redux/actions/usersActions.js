import axios from 'axios'
export const FETCH_USERS = 'FETCH_USERS'


export const fetchUsers = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(users => {
        dispatch({
        type: FETCH_USERS,
        payload: users
      })
    })
  }
}
