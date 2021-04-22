import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class FlexDimensionsApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewSm} />
        <View style={styles.viewMd} />
        <View style={styles.viewLg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewSm: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  viewMd: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  viewLg: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});

// export default class FixedDimensionsApp extends Component {
//   render() {
//     return (
//       <View>
//         <View style={styles.viewSm} />
//         <View style={styles.viewMd} />
//         <View style={styles.viewLg} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewSm: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'powderblue',
//   },
//   viewMd: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'skyblue',
//   },
//   viewLg: {
//     width: 300,
//     height: 300,
//     backgroundColor: 'steelblue',
//   },
// });
