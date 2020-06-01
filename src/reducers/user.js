import { SET_USERNAME } from '../actionTypes';

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return action.payload;
        default:
            return state;
    }
}

const initialUserState = {
    userName: ''
};
