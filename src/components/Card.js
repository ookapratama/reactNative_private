import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = ({id, desa, kecamatan}) => {
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
          {desa}
        </Text>
        <Text style={{fontSize: 18}}>{kecamatan}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
