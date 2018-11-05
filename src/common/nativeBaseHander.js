import { Font } from 'expo';

export default () => Font.loadAsync({
  'Roboto': require('native-base/Fonts/Roboto.ttf'),
  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
});
