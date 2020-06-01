import { Action, Post } from './types';
import {
    POST_LIST_LOAD_PENDING, POST_LIST_LOAD_SUCCESS, POST_LIST_LOAD_FAILED,
    POST_CREATE_PENDING, POST_CREATE_SUCCESS, POST_CREATE_FAILED,
} from './actions';

const initialState = {
    loading: false,
    postList: undefined
};

export const reducer = (state: { loading: boolean, postList: Post[] | undefined } = initialState, action: Action) => {
    switch (action.type) {
        case POST_LIST_LOAD_PENDING:
            return {
                ...state,
                loading: true
            };
        case POST_LIST_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                postList: action.payload as Post[]
            };
        case POST_LIST_LOAD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload as unknown
            };
        case POST_CREATE_PENDING:
            return {
                ...state,
                loading: true
            };
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                postList: [
                    ...state.postList as Post[],
                    action.payload as Post,
                ]
            };
        case POST_CREATE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload as unknown
            };
        default:
            return state;
    }
};
