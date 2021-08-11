import React from 'react';
import {View, Button} from 'react-native';
const PressButton = props => {
  return (
    <View style={{margin: 10}}>
      <Button
        title={props.title}
        onPress={() => props.player.play(props.title)}></Button>
    </View>
  );
};
export default PressButton;
