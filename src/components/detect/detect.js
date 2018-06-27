'use strict'
import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    TouchableOpacity,
    Image,
    TimerMixin,
    AlertIOS
} from 'react-native';

import Video from 'react-native-video';
import Camera from 'react-native-camera';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from './detectStyle.js';

class Detect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnded: false
        }
    }
    componentDidMount() {
        setTimeout(()=>this.setState({showCam: true}), 100)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bg.jpg')} style={styles.backgroundImage}/>
                {
                    this.state.isEnded ? null : (
                        <TouchableOpacity style={styles.backbutton_container} onPress={()=>NavigationActions.pop()}>
                            <Image source={require('../../assets/back.png')} style={styles.backbutton}/>
                        </TouchableOpacity>
                    )
                }                
                <Text style={styles.title}>
                    TRY NOT TO LAUGH
                </Text>
                <View style={styles.video_container}>
                    {
                        this.state.isEnded ? (
                            <Text style={styles.result}>
                                You won!
                            </Text>
                        ) : null
                    }
                    <Video 
                        source={require('../../assets/video.mp4')}
                        style={styles.video}
                        onEnd={() => {this.setState({
                            isEnded: true
                        })}}/>
                </View>

                {
                    this.state.isEnded ? (
                        <TouchableOpacity style={styles.button_container} onPress={()=>NavigationActions.start()}>
                            <Text style={styles.done}> DONE </Text>
                        </TouchableOpacity>
                    ) : (
                        <Camera
                            ref={(cam) => {
                            this.camera = cam;
                            }}
                            aspect={ Camera.constants.Aspect.fill }
                            type={ Camera.constants.Type.front }
                            style={styles.camera_container}
                        />
                    )
                }
            </View>
        );
    }
}

export default Detect;


// 'use strict';
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View
// } from 'react-native';
// import Camera from 'react-native-camera';

// class Detect extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Camera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
// 	  onBarCodeRead={this.onBarCodeRead.bind(this)}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}>
//           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
//         </Camera>
//       </View>
//     );
//   }

//   onBarCodeRead(e) {
//     console.log(
//         "Barcode Found!",
//         "Type: " + e.type + "\nData: " + e.data
//     );
//   }

//   takePicture() {
//     const options = {};
//     //options.location = ...
//     this.camera.capture({metadata: options})
//       .then((data) => console.log(data))
//       .catch(err => console.error(err));
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40
//   }
// });

// export default Detect