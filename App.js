/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  NativeModules,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const {NavigationModule} = NativeModules;

const App: () => React$Node = (props) => {
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`);
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`);
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, []);

  const _onPress = () => {
    console.log(`NativeModules`, NavigationModule);
    NavigationModule.navigateToNative();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.button} onPress={_onPress}>
          <Text>Navigate to native</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 12,
  },
});

export default App;
