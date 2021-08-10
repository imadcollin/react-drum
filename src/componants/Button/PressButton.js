import React from 'react';
import {Button} from 'react-native';
const PressButton = props => {
  return (
    <Button
      title={props.title}
      onPress={() => props.player.play(props.title)}></Button>
  );
};
export default PressButton;
