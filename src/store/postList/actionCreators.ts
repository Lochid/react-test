import {
    POST_CREATE_PENDING, POST_CREATE_SUCCESS, POST_CREATE_FAILED, POST_LIST_LOAD,
} from './actions';
import { Post, Action } from './types';
import { createPost as createPostApi } from '../../api';
import { Dispatch } from 'redux';

export const fetchPostList = () => ({
    type: POST_LIST_LOAD
});

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