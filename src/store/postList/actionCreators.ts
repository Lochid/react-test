import {
    POST_LIST_LOAD_PENDING, POST_LIST_LOAD_SUCCESS, POST_LIST_LOAD_FAILED,
    POST_CREATE_PENDING, POST_CREATE_SUCCESS, POST_CREATE_FAILED,
} from './actions';
import { Post, Action } from './types';
import { postList, createPost as createPostApi } from '../../api'
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

const createPostPending = () => ({
    type: POST_CREATE_PENDING
});

const createPostSuccess = (post: Post) => {
    return ({
        type: POST_CREATE_SUCCESS,
        payload: post
    })
};

const createPostFailed = (error: unknown) => ({
    type: POST_CREATE_FAILED,
    payload: error
});

export const createPost = (title: string, body: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(createPostPending());

        createPostApi(title, body)
            .then(({ data }: { data: { [id: string]: string } }) => {
                return dispatch(createPostSuccess({
                    id: data['id'],
                    ...JSON.parse(Object.keys(data)[0])
                } as Post))
            })
            .catch((error: unknown) => dispatch(createPostFailed(error)));
    };
};