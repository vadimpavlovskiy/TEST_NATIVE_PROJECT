import React from "react";
import { Image, View } from 'react-native';
import singlePhotoStyles from "../../styles/component-styles/singlePhoto.styles";

const SinglePhotoComponent = ({ photoUrl }) => {
    return (
        <View style={singlePhotoStyles.container}>
            <View style={singlePhotoStyles.photoElem}><Image style={singlePhotoStyles.photo} resizeMode={"cover"} source={{ uri: photoUrl }} /></View>
        </View>
    )
}

export default SinglePhotoComponent