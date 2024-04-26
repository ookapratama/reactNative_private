import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// function App () {

//     return (
//         <Text>Hello world</Text>
//     )
// }

// Arrow function

const App = () => {

    

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Image
        source={require('./src/assets/gambar.jpg')}
        style={styles.img_icon}
      />
      <Text>Login</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  img_icon: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
});
