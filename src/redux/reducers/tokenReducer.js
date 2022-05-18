import { GET_TOKEN } from "../constants";

const INITIAL_STATE = {
    photos: null,
}

const TokenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                photos: action.payload,
            };
        default:
            return state;
    }
}
export default TokenReducer;