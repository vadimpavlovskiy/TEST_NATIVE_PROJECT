import { StyleSheet } from 'react-native';

const singlePhotoStyles = StyleSheet.create({
    container: {
        height: '100%',
    },
    photoElem: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        minWidth: '100%',
        minHeight: '100%',
    },
});

export default singlePhotoStyles;
