import React from 'react';
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/es/integration/react'

import Store from './src/store/configStore'

import List from './src/pages/List'

export default function App() {
  let persistor = persistStore(Store)

  return (
    <Provider store={Store}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent  />
      <PersistGate persistor={persistor}></PersistGate>
      <List/>
    </Provider>
  );
}

