import 'react-native-gesture-handler';
import React from 'react';

import { setCustomText } from 'react-native-global-props';

import Navigation from './Navigation';

const customTextProps = {
  style: {
    fontFamily: 'Satoshi',
  },
};

setCustomText(customTextProps);

const App = () => {
  return (
      <Navigation />
  );
};

export default App;
