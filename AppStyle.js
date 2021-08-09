import {StyleSheet} from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: 'green',
    height: "100%",

  },
  view: {
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  flatListStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'column',
    margin: '2%',
  },
});

export default AppStyles;
