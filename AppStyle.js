import {StyleSheet} from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  view: {
    display: 'flex',
    flexWrap: 'wrap',
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
  },
  flatListContent: {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'},
});

export default AppStyles;
