import React from 'react';
import { Text, View, Button } from 'react-native';
import Header from '../layouts/Header.layout';
import PhotosLayout from '../layouts/Photos.layout';
import usePhotoStatus from '../hooks/PhotosHook';
import { MainPageStyles } from '../styles/page-styles/Main.styles'
import { useSelector } from 'react-redux';

const Main = () => {
    // Hook to get photos
    const photos = usePhotoStatus();

    return (
        <View style={MainPageStyles.container}>
            <Header />
            <PhotosLayout photos={photos} />
        </View>
    );
};

export default Main;