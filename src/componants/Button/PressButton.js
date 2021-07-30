import React from 'react';
import {Text, View, Button} from 'react-native';

const PressButton = props => {
  return (
    <View>
      <Button
        title={props.title}
        onPress={() => console.log(`${props.title} is Pressed!`)}></Button>
    </View>
  );
};
export default PressButton;
