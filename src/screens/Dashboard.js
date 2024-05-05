import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {API_KEY, URL_API} from '../../env';

const supabase = createClient(URL_API, API_KEY);

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const getData = async () => {
    try {
      const {data, error} = await supabase.from('kepolisian').select('*');
      console.log(data);
      setDatas(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Masukkan Nama Desa" />
      <TextInput style={styles.input} placeholder="Masukkan Nama Kecamatan" />
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'skyblue',
          marginVertical: 10,
          marginBottom: 30,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            padding: 6,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Tambah Data
        </Text>
      </TouchableOpacity>
      <Card desa={desa} kecamatan={kecamatan} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 18,
  },
  input: {
    padding: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    borderWidth: 2,
    marginBottom: 18,
  },
});
