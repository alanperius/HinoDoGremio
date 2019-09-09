import React from 'react';
import { View, ToastAndroid } from 'react-native';
import MusicControl from 'react-native-music-control';
import Sound from 'react-native-sound';
import styles from './styles';
import Player from './Player'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      urlRadio: props.urlRadio,
      radioName: props.radioName,
      isLoading: false,
      volume: 10

    }
    this.displayInfo = this.displayInfo.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.volume = this.volume.bind(this)
  }

  isPlaying() {
    return new Promise((resolve, reject) => {
      this.whoosh.getCurrentTime((seconds, isPlaying) => {
        resolve(isPlaying);
      });
    })
  }



  componentDidMount() {
    MusicControl.enableBackgroundMode(true);
    this.whoosh = new Sound(require('./hinoGremio.mp3'), Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the radio', error);
      } else { // loaded successfully
        console.log('Sound loaded');
      }
    });

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

  async play() {
    this.whoosh.play((success) => {
      if (success) {

        MusicControl.setNowPlaying({
          title: 'RS Rádios Futebol',
          artwork: require('../../../assets/logo_gremio.png'),
        })
        MusicControl.enableControl('play', false)
        MusicControl.enableControl('pause', true)

      } else {
        ToastAndroid.showWithGravity(
          'A rádio está indisponível. Tente novamente mais tarde.',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        console.log('playback failed due to audio decoding errors');
        this.pause
      }
    });

    this.setState({
      play: true
    })
  }

  pause() {
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

  volume(vol) {
    this.setState({
      volume: vol
    })
    this.whoosh.setVolume(vol);
  }
  render() {

    return (
      <View style={styles.PlayerButton}>
        <Player radioName={this.state.radioName}
          play={this.state.play}
          volume={this.volume}
          displayInfo={this.displayInfo} />
      </View>
    );
  }
}