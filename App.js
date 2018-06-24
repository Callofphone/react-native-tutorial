import React from 'react';
import { StyleSheet, View } from 'react-native';
import FetchExample from "./components/FetchExample";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <FetchExample/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
