import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoList } from "../redux/actions/PhotoAction";


// Hook for getting photos from API, send them to redux and comeback as value
function usePhotoStatus() {

    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos.photos)

    useEffect(() => {
        function setPhotos() {
            dispatch(getPhotoList());
        }
        setPhotos()
    }, [dispatch])

    return photos;
}

export default usePhotoStatus;