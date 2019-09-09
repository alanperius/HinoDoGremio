import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity, AppState } from 'react-native';
import Video from 'react-native-video';
import Slider from 'react-native-slider';





export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      currentTime: null,
      duration: 0,
      isFullScreen: false,
      isLoading: false,
      paused: true,
      screenType: 'content',
      radioName: props.radioName,
      urlRadio: props.urlRadio,
    };
  }


  onPause() {
    console.log("=======================================================================")
    this.setState({
      paused: !this.state.paused
    })
  }


  onProgress = data => {
    console.log(data)
    if (!this.state.paused)
      this.setState({ currentTime: data.currentTime });

  };

  onLoad = data => {

    this.setState({ duration: data.duration, isLoading: false })
  };


  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
    });
  }

  onSeeking(value) {
    console.log(Math.round(value))
    this.seek(Math.round(value));
  }


  render() {
    const video = (
      <Video source={{ uri: this.state.urlRadio }}        // Can be a URL or a local file.
        ref="audioElement"              // Pauses playback entirely.
        onLoad={this.onLoad}            // Callback when video loads
        onProgress={this.onProgress}    // Callback every ~250ms with currentTime
        paused={this.state.paused}
        playInBackground={true}
        playWhenInactive={true}
        //onAudioFocusChanged={this.onAudioFocusChanged}
      />
    );      

    return (
      <View style={styles.container}>
       

        <View style={styles.bContainer}>
        {video}
          <TouchableOpacity style={styles.btnContainer} onPress={this.onPause.bind(this)}>
            {!this.state.paused ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('./assets/s.png')}
              />
            ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('./assets/p.png')}
                />
              )}
          </TouchableOpacity>
          <Text style={{color: 'white'}}> {this.state.radioName}</Text>
        </View>



      </View>
    );

  }
}

// Later on in your styles..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  bContainer: {
    alignItems: 'center'
  },

  btnContainer: {
    padding: 10,
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },

});
