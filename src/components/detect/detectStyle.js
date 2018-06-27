'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

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
    video_container: {
        position: 'absolute',
        width: width,
        top: 100,
    },
    video: {
        width: width,
        height: height * 0.35,
        marginTop: 30
    },
    result: {
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    camera_container: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        height: height * 0.35,
        overflow: 'hidden',
        borderRadius: 30,
        left: 20,
        right: 20,
        bottom: height * 0.05,
        alignSelf: 'center'
    },
    button_container: {
        position: 'absolute',
        width: 100,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: height * 0.15
    },
    done: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});

export default styles;