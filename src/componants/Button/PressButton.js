import React  from 'react';
import {View, Button} from 'react-native';
const PressButton = props => {
  return (
    <View>
      <Button
        title={props.title}
        color="#555"
        onPress={()=> props.player.play(props.title)
        }></Button>
    </View>
  );
};
export default PressButton;
