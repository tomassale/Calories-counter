import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import Route from './src/route/Routes'

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Route/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
