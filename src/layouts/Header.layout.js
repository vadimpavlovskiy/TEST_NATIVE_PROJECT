import React, { useEffect, useState } from "react";

import { View, ScrollView, Button, Text } from 'react-native';

import { SearchBarStyle } from "../styles/layout-styles/SearchBar.layout";

import usePhotoStatus from "../hooks/PhotosHook";

const Header = () => {
    // const getNewPhotos = usePhotoStatus();
    return (
        <View style={SearchBarStyle.header}>
            <Text style={SearchBarStyle.title}>Random Photos</Text>
        </View >
    )
}

export default Header;