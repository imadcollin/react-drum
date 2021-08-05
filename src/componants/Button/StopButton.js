import React ,{ useState }  from 'react';
import {Text, View, Button} from 'react-native';
const StopButton = props => {
  return (
    <View>
      <Text> Stop</Text>
      <Button
        title="Stop"
        onPress={()=> props.player.stop()}></Button>
    </View>
  );
};
export default StopButton;
