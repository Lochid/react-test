import { Action } from './types';
import { INCREMENT_COUNTER } from './actions';

const initialState = {
    count: 0,
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};
