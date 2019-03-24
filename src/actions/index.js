import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPost =  () => async dispatch => {
        const respoonse = await jsonPlaceholder.get('/posts');
       
        dispatch({type:'FETCH_POSTS', payload: respoonse})
    };
    

