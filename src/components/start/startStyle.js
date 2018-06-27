'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },
    backbutton_container: {
        position: 'absolute',
        top: 30,
        left: 10
    },
    backbutton: {
        width: 30,
        height: 30
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        top: 30,
    },
    button_container: {
        position: 'absolute',
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    start: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default styles;