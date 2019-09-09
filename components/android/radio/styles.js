import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
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
  PlayerContent: {
    flex: 1,
    margin: 10
  },
  PlayerPlay: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  PlayerRadioName: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: 5
  },

  PlayerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayerSliderContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  PlayerSlider: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 40,
    color: 'white'
  },

});

export default styles;