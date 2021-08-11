import React from 'react';
import { View, Button, TouchableOpacity} from 'react-native';
const StopButton = props => {
  return (
    <View style={{flex: 1, margin:50}}>
      <Button
        title="Stop"
        color="#ff0000"
        onPress={() => props.player.stop()}></Button>
      <TouchableOpacity
        activeOpacity={0.95}
        style={{width: 250}}></TouchableOpacity>
    </View>
  );
};
export default StopButton;
