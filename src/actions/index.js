import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts =  () => async dispatch => {
        const respoonse = await jsonPlaceholder.get('/posts');
       
        dispatch({type:'FETCH_POSTS', payload: respoonse.data})
    };

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
}
    

