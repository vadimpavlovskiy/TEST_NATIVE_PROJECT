import { GET_PHOTO_LIST } from "../constants";

const INITIAL_STATE = {
    photos: null,
}

const PhotoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PHOTO_LIST:
            return {
                ...state,
                photos: action.payload,
            };
        default:
            return state;
    }
}
export default PhotoReducer;