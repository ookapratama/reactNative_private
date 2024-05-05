import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = ({desa, kecamatan}) => {
  return (
    <View style={{marginBottom: 14}}>
      <TouchableOpacity style={{borderWidth: 1, padding: 10, borderRadius: 6}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            letterSpacing: 2,
          }}>
          Card
        </Text>
        <Text style={{fontSize: 18}}>Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
