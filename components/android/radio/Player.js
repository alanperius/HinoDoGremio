import React from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./styles"
import Slider from '@react-native-community/slider';

const Player = ({volume, radioName, play, displayInfo, ...rest }) => (
  <View {...rest} style={styles.PlayerContent}>
    <View style={styles.PlayerButton}>
      <TouchableOpacity style={styles.PlayerPlay} onPress={displayInfo}>
        {!play ? (
          <Image style={{ width: 65, height: 65 }}
            source={require('../../../assets/p.png')}
          />
        ) : (
            <Image style={{ width: 65, height: 65 }}
              source={require('../../../assets/s.png')}
            />
          )}
      </TouchableOpacity>
    </View>
  </View>
)

export default Player