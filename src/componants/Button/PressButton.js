import React  from 'react';
import {View, Button,StyleSheet} from 'react-native';
const PressButton = props => {
  return (
    <View style={PressStyle}>
      <Button style={PressStyle.button}
        title={props.title}
        onPress={()=> props.player.play(props.title)
        }></Button>
    </View>
  );
};
export default PressButton;

const PressStyle=StyleSheet.create(
  {
    container:{
      display:'flex',
      flexDirection:'row',
      backgroundColor:'yellow'
      
    },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
  }
)