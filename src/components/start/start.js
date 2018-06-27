import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from './startStyle.js';

class Start extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bg.jpg')} style={styles.backgroundImage}/>
                <TouchableOpacity style={styles.backbutton_container}>
                    <Image source={require('../../assets/back.png')} style={styles.backbutton}/>
                </TouchableOpacity>
                
                <Text style={styles.title}>
                    View 1
                </Text>
                <TouchableOpacity style={styles.button_container} onPress={()=>NavigationActions.detect()}>
                    <Text style={styles.start}> START </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Start;