import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'


export const fetchPosts = () => {
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

export const addPost = (newPost) => {
  console.log(newPost)
  return async (dispatch) => {
    let post = await axios.post(`http://localhost:8000/addpost/${newPost.id}`, newPost)
    console.log(post);
    dispatch({
      type: ADD_POST,
      payload: post.data[0]
    })
  }
}
