import getPhotos from "../../api/services/Photo";
import { GET_PHOTO_LIST } from "../constants";

export function setPhotoList(photos) {
    return {
        type: GET_PHOTO_LIST,
        payload: photos,
    };
}

export function getPhotoList() {
    return async (dispatch) => {
        const apiReq = await getPhotos();
        await dispatch(setPhotoList(apiReq));
    }
}