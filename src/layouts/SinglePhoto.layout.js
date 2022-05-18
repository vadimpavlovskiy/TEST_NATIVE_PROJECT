import React from "react";
import { Text } from 'react-native';
import ImageItem from "../components/photo/photo";
import SinglePhotoComponent from "../components/singlePhoto/signglePhoto";

const SinglePhoto = ({ photoUrl }) => {
    return (
        <SinglePhotoComponent photoUrl={photoUrl} />
    )
}

export default SinglePhoto