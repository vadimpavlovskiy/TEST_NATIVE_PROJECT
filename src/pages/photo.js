import React from "react";
import { View } from 'react-native';
import SinglePhoto from '../layouts/SinglePhoto.layout';

const DetailsScreen = ({ navigation, route }) => {
    return (
        <View>
            <SinglePhoto photoUrl={route.params.photoUrl} />
        </View>
    )
}
export default DetailsScreen