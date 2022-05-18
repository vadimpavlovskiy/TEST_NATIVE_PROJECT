import React from "react";
import { TextInput } from 'react-native';

import { Inputstyles } from "../../styles/component-styles/TextInput.styles";

const SearchInput = () => {
    return (
        <TextInput style={Inputstyles.input} placeholder={`Enter a username`} />
    )
};

export default SearchInput;