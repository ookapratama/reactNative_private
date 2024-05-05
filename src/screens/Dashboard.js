import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
// import 'react-native-url-polyfill/auto';
// import {createClient} from '@supabase/supabase-js';
// import {API_KEY, URL_API} from '../../env';

// const supabase = createClient(URL_API, API_KEY);

// let dataDummy = [
//   {desa: 'antang', kecamatan: 'manggala'},
//   {desa: 'baruga', kecamatan: 'manggala'},
//   {desa: 'nipa nipa', kecamatan: 'manggala'},
// ];
const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://143c-125-162-213-242.ngrok-free.app/api/`,
      );
      setDatas(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const addData = async () => {
    const response = await axios.post(
      `https://143c-125-162-213-242.ngrok-free.app/api/store`,
      {
        desa: desa,
        kecamatan: kecamatan,
      },
    );

    setDesa('');
    setKecamatan('');
    onRefresh();
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <TextInput
          style={styles.input}
          onChangeText={value => setDesa(value)}
          value={desa}
          placeholder="Masukkan Nama Desa"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setKecamatan(value)}
          value={kecamatan}
          placeholder="Masukkan Nama Kecamatan"
        />
        <TouchableOpacity
          onPress={() => addData()}
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
        {datas.map(item => (
          <Card
            key={item.id}
            id={item.id}
            desa={item.desa}
            kecamatan={item.kecamatan}
          />
        ))}
      </ScrollView>
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
