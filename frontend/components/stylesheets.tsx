import {StyleSheet} from 'react-native';
import * as colors from './colors';

export const mainAppStyles = StyleSheet.create({
  container: {
    //flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 20,
  },
  button_wrapper: {
    marginBottom: 10,
  },
});

export const circularButtonStyles = StyleSheet.create({
  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: colors.ACCENT_COLOR_DARK,
  },
});

export const performancePageStyles = StyleSheet.create({
  borderedImage: {
    minWidth: 300,
    minHeight: 100,
    width: '97%',
    height: '25%',
    marginTop: '1%',
    resizeMode: 'stretch',
    borderColor: colors.BASE_COLOR,
    borderRadius: 10,
  },
  row: {
    minHeight: 30,
    height: '7%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderBottomWidth: 1,
    //borderBottomColor: colors.BASE_COLOR, //colors.NEUTRAL_COLOR,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  cell50percent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '49.7%',
  },
  rowDelimiter: {
    height: '100%',
    width: 0,
    backgroundColor: colors.NEUTRAL_COLOR,
    marginRight: 10,
  },
  textBlock: {
    marginHorizontal: '2%',
    height: '25%',
    flexDirection: 'row',
  },
  textBlockText: {flexGrow: 1, width: 0},
  container: {
    flex: 1,
    backgroundColor: colors.BASE_COLOR, //'#fbe9e2',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  },
  iconBackground: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.ACCENT_COLOR_DARK,
  },
  titleTextBackground: {
    height: 40,
    width: '95%',
    backgroundColor: colors.ACCENT_BRIGHT_TINT_COLOR,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  rowTextBackground: {
    height: 40,
    width: '82%',
    backgroundColor: colors.ACCENT_BRIGHT_TINT_COLOR,
    borderRadius: 20,
    alignContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 5,
  },
  halfRowTextBackground: {
    height: 40,
    width: '60%',
    backgroundColor: colors.ACCENT_BRIGHT_TINT_COLOR,
    borderRadius: 20,
    alignContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 5,
  },
  bodyTextBackground: {
    height: '100%',
    width: '95%',
    backgroundColor: colors.ACCENT_DARK_TINT_COLOR,
    borderRadius: 20,
    alignContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  h3Text: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
    marginHorizontal: 8,
  },
  h1Text: {
    fontFamily: 'monospace',
    color: colors.TEXT_COLOR,
    fontSize: 25,
  },
  h5Text: {
    color: colors.BRIGHT_TEXT_COLOR,
    fontSize: 15,
    textAlign: 'justify',
  },
  buttonWrapper2: {
    flexDirection: 'column',
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});

export const baseContainerStyles = {
  container: {
    flex: 1,
  },
};
