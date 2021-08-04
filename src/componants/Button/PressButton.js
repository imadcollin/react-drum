import React ,{ useState }  from 'react';
import {Text, View, Button} from 'react-native';
var Sound = require('react-native-sound');
import Player from '../../helper/Player';
const PressButton = props => {
   const [player] = useState(new Player(props.title))
  
  return (
    <View>
      <Button
        title={props.title}
        color="#555"
        onPress={()=> player.play(props.title)
        }></Button>
      <Text> PLay</Text>
      <Button
        title="Pause"
        onPress={()=>   player.pause}></Button>
    </View>
  );
};
export default PressButton;
