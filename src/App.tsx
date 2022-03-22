import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
