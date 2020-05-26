import { POST_LIST_LOAD_PENDING, POST_LIST_LOAD_SUCCESS, POST_LIST_LOAD_FAILED } from './actions';
import { Post, Action } from './types';
import { postList } from '../../api'
import { Dispatch } from 'redux';


const fetchPostListPending = () => ({
    type: POST_LIST_LOAD_PENDING
});

const fetchPostListSuccess = (postList: Post[]) => ({
    type: POST_LIST_LOAD_SUCCESS,
    payload: postList
});

const fetchPostListFailed = (error: unknown) => ({
    type: POST_LIST_LOAD_FAILED,
    payload: error
});

export const fetchPostList = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(fetchPostListPending());

        postList()
            .then(({ data }: { data: Post[] }) => dispatch(fetchPostListSuccess(data)))
            .catch((error: unknown) => dispatch(fetchPostListFailed(error)));
    };
};