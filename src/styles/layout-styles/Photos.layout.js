import { StyleSheet } from 'react-native'

export const PhotosStyles = StyleSheet.create({
    photos_container: {
        flex: 1,
        width: "100%",
        maxHeight: "100%",
        marginLeft: '10%',
    },
    photos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
})