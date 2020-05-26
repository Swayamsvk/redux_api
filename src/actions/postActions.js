import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
};


export const createPost = postData => dispatch => {
    axios('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        data: JSON.stringify(postData)
    })

    .then(res => res.data)
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
        })
    )
}