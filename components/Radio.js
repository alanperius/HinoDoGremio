import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Image, Platform } from 'react-native';

import MusicControl from 'react-native-music-control';
import Sound from 'react-native-sound';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      urlRadio: props.urlRadio,
      radioName: props.radioName,
      isLoading: false,

    }
    this.displayInfo = this.displayInfo.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  componentDidMount() {
    MusicControl.enableBackgroundMode(true);

    this.whoosh = new Sound(this.state.urlRadio, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the radio', error);
      } else { // loaded successfully
        console.log('Sound loaded');
      }
    });

    if (Platform.OS == 'ios') {
      // MusicControl.on('play', this.play)
      // MusicControl.on('pause', this.pause)
    } else {
      MusicControl.on('play', () => {
        this.play
      });
      MusicControl.on('pause', () => {
        this.pause
      });

      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
        elapsedTime: 135
      })
    }


  }

  play() {

    this.whoosh.play((success) => {
      if (success) {
      } else {
        this.pause()
        ToastAndroid.showWithGravity(
          'Houve um problema de conexão. Tente novamente.',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );

        console.log('playback failed due to audio decoding errors');
      }
    });

    MusicControl.setNowPlaying({
      title: 'RS Rádios Futebol',
      artwork: require('../assets/logo_gremio.png'),
    })
    MusicControl.enableControl('play', false)
    MusicControl.enableControl('pause', true)

    this.setState({
      play: true
    })
  }

  pause() {
    console.log('----------------play--------------------');

    this.whoosh.pause()
    MusicControl.enableControl('play', false)
    MusicControl.enableControl('pause', true)
    this.setState({
      play: false
    })
  }

  displayInfo() {
    if (!this.state.play) {
      this.play()
    } else {
      this.pause()
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}> {this.state.radioName}</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={this.displayInfo}>
          {!this.state.play ? (
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../assets/p.png')}
            />
          ) : (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../assets/s.png')}
              />
            )}
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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