import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Edit = ({route}) => {
  const {idData} = route.params
  console.log(idData)
  return (
    <View>
      <Text>Edit</Text>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({});
