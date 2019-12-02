import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
// import { View } from 'react-native';

import './config/Reactotron';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#444" />
      <Routes />
    </>
  );
}
