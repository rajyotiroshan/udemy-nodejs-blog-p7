import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

/*     const userId = _.uniq(_.map(getState().posts, "userId"));
    userId.forEach(id=> dispatch(fetchUser(id))); */
    
    //above solution or below.
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts =  () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
       
        dispatch({type:'FETCH_POSTS', payload: response.data})
    };

//working.
/*  export const fetchUser = id =>dispatch => _fetchUser(id, dispatch);
    const _fetchUser = _.memoize(async (id, dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data});
    }); */
//not working memoizing
/* export const fetchUser = function(id){
    return _.memoize(async function( dispatch ){
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
    });
}; */

export const fetchUser = id =>async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data}); 
}
   







    

