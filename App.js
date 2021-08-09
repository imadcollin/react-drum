import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import AppStyles from './AppStyle';
import PressButton from './src/componants/Button/PressButton';
import samples from './src/constants/data';
import StopButton from './src/componants/Button/StopButton';
import Player from './src/helper/Player';
import HeaderStyle from './src/componants/Headers/HeaderStyle';
const App = () => {
  const [player] = useState(new Player());

  const renderItem = ({item}) => (
    <PressButton title={item.title} player={player}></PressButton>
  );
  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={HeaderStyle.container}>
        <ImageBackground
          source={require('./assets/images/1.jpg')}
          style={HeaderStyle.img}></ImageBackground>
        <Text style={HeaderStyle.text}>Img </Text>

        <View style={AppStyles.view}>
          <View style={AppStyles.flatListStyle}>
            <FlatList
              horizontal={false}
              numColumns={5}
              data={samples}
              renderItem={renderItem}
              keyExtractor={item => item.id}></FlatList>
          </View>
        </View>

        <StopButton player={player}></StopButton>
        <Text>App View</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
