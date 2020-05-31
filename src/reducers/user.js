import { SET_USERNAME } from '../actionTypes';

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case SET_USERNAME:
            const { userName } = action.payload;
            return userName;
        default:
            return state;
    }
}

const initialUserState = {
    userName: ''
};
