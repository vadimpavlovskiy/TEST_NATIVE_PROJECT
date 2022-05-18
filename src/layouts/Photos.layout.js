import React from "react";

import { View, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import ImageItem from "../components/photo/photo";

import { PhotosStyles } from '../styles/layout-styles/Photos.layout'

const PhotosLayout = ({ photos }) => {
    return (
        <ScrollView style={PhotosStyles.photos_container}>
            <View style={PhotosStyles.photos}>
                {photos ? photos.map((photo, index) => { return <ImageItem key={index} userName={photo.user.first_name} photoUrl={photo.urls.small} /> }) : null}
            </View>
        </ScrollView>
    )
}
export default PhotosLayout