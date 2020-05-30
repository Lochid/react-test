import { Action, Post } from './types';
import { POST_LIST_LOAD_PENDING, POST_LIST_LOAD_FAILED, POST_LIST_LOAD_SUCCESS } from './actions';

const initialState = {
    loading: false
};

export const reducer = (state = initialState, action: Action) => {
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
        default:
            return state;
    }
};
