import React from 'react';
import {Text, View, Button} from 'react-native';
var Sound = require('react-native-sound');

const PressButton = props => {
  const play = () => {
    Sound.setCategory('Playback');
    var whoosh = new Sound('my.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };
  return (
    <View>
      <Button
        title={props.title}
        onPress={() => console.log(`${props.title} is Pressed!`)}></Button>
      <Button title="play" color="#555" onPress={play}></Button>
    </View>
  );
};
export default PressButton;
