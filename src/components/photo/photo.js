import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { PhotoItemStyles } from "../../styles/component-styles/PhotoItem.styles";

const ImageItem = ({ photoUrl, userName, navigation }) => {
    const nav = useNavigation();
    return (
        <View style={PhotoItemStyles.photoItem}>
            <Text style={PhotoItemStyles.userTitle}>{userName}</Text>
            <TouchableOpacity onPress={() => nav.navigate('Details', { photoUrl })} ><Image style={PhotoItemStyles.image} source={{ uri: `${photoUrl}` }} /></TouchableOpacity>
        </View>
    )
}

export default ImageItem