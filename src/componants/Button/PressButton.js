import React from 'react';
import {Text, View, Button} from 'react-native';
import {sample} from 'lodash';
var Sound = require('react-native-sound');
import Player from '../../helper/Player';
const PressButton = props => {
  return (
    <View>
      <Button
        title={props.title}
        color="#555"
        onPress={() => new Player(props.title).play(props.title)}></Button>
      <Text> PLay</Text>
      <Button
        title="Pause"
        onPress={() => new Player(props.title).pause(props.title)}></Button>
    </View>
  );
};
export default PressButton;
