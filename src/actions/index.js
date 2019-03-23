import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPost = async ()=> {
   const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POST',
        payload: response
    }
}