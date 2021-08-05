import React ,{ useState }  from 'react';
import {SafeAreaView, Text, View, Alert, FlatList} from 'react-native';
import Header from './src/componants/Headers/Header';
import AppStyles from './AppStyle';
import Layout from './src/componants/Layout/Layout';
import PressButton from './src/componants/Button/PressButton';
import samples from './src/constants/data';
import StopButton from './src/componants/Button/StopButton';
import Player from './src/helper/Player';
const App = () => {
  const [player] = useState(new Player());

  const renderItem = ({item}) => (<PressButton title={item.title} player={player}></PressButton>);

  return (
    <SafeAreaView style={AppStyles.container}>
      <Header></Header>
      <Layout></Layout>
      <FlatList
        data={samples}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
      <Text>App Container</Text>
      <View style={AppStyles.view}>
        <StopButton  player={player}></StopButton>
        <Text>App View</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
