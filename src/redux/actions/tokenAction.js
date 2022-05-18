import getPhotos from "../../api/services/Photo";
import { GET_TOKEN } from "../constants";

export function setToken(token) {
    return {
        type: GET_TOKEN,
        payload: token,
    };
}

export function getToken() {
    return async (dispatch) => {
        const apiReq = await getPhotos();
        await dispatch(setToken(apiReq));
    }
}