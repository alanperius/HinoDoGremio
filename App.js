import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import AndroidRadio from './components/android/radio/AndroidRadio'


const urlHinoGremio = "https://hinomp3.com/hinos/g/hino-gremio-rs.mp3?_=1"


export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <ImageBackground source={require('./wallpaper.jpg')} style={styles.backgroundImage} >
                <View style={styles.header}>
                    <Text style={{color: 'white', fontSize: 30, marginTop: 30}}>HINO DO GREMIO</Text>
                </View>
                <View style={styles.container}>
                    <AndroidRadio radioName={"Hino Grêmioo"} urlRadio={urlHinoGremio}/>
                </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },

    container: {
        flex: 5,
    },
    header: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})