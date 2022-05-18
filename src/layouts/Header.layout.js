import React from "react";

import { View, Text } from 'react-native';

import { SearchBarStyle } from "../styles/layout-styles/SearchBar.layout";


const Header = () => {
    return (
        <View style={SearchBarStyle.header}>
            <Text style={SearchBarStyle.title}>Random Photos</Text>
        </View >
    )
}

export default Header;