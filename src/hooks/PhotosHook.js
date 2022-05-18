import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPhotos from "../api/services/Photo";
import { getToken, setToken } from "../redux/actions/tokenAction";


// Hook
function usePhotoStatus() {
    const [hookPhoto, setHookPhoto] = useState();

    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos.photos)

    useEffect(() => {
        function setPhotos() {
            dispatch(getToken());
        }
        setPhotos()
    }, [dispatch])

    return photos
}

export default usePhotoStatus;