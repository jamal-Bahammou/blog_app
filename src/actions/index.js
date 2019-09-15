import JSONPlaceholder from '../api/JSONPlaceholder';
import _ from 'lodash';

// 💣💥 ACTION TO GET THE LIST OF POSTS 💣💥
export const fetchPosts = () => async dispatch => {
	const response = await JSONPlaceholder.get('/posts');
	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data
	});
};

// 💣💥 ACTION TO GET THE SINGLE USER 💣💥
export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// CREATE THE FUNCTION TO FETCH DATA OUT OF THE fetchUser TO MEMOIZE JUST THE FETCH NOT THE FUNCTION THAT DO THE FETCH
const _fetchUser = _.memoize(async (userId, dispatch) => {
	const response = await JSONPlaceholder.get(`/users/${userId}`);
	dispatch({
		type: 'FETCH_USER',
		payload: response.data
	});
});
