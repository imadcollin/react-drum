import {StyleSheet} from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: '100%',
  },
  text: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 24,
  },
  img: {
    width: '100%',
    height: '100%',
    flex:1,
    resizeMode:"contain",
    position: 'absolute',
  },
});

export default HeaderStyle;
