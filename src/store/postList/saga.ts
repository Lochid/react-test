import { takeEvery, put, call } from 'redux-saga/effects'
import { postList } from '../../api';
import { POST_LIST_LOAD_PENDING, POST_LIST_LOAD_SUCCESS, POST_LIST_LOAD_FAILED, POST_LIST_LOAD } from './actions';
import { Post } from './types';

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

function* fetchPostListAsync() {
    try {
        yield put(fetchPostListPending());
        const data = yield call(() => {
            return postList()
                .then(res => res.data);
        });
        yield put(fetchPostListSuccess(data));
    } catch (error) {
        yield put(fetchPostListFailed(error));
    }
}

export function* watchFetchPostList() {
    yield takeEvery(POST_LIST_LOAD, fetchPostListAsync);
}