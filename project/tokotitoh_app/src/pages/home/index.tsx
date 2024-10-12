import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CONFIG} from '../../config';
import normalize from 'react-native-normalize';
import HomeHeader from '../../components/Headers/HomeHeader';
import ModalRN from '../../components/ModalRN';

export default function Home() {
  const [list, setList] = useState<any>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [modal, setModal] = useState<any>({visible: false});

  const colorScheme = useColorScheme();
  const getCategory = async () => {
    try {
      const result = await axios.get(CONFIG.base_url_api + `/categories`, {
        headers: {
          'bearer-token': 'tokotitohapi',
          'x-partner-code': 'id.marketplace.tokotitoh',
        },
      });
      setList({
        category: result.data.items.rows,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategory = async (category_id: number) => {
    try {
      const result = await axios.get(
        CONFIG.base_url_api + `/subcategories?category_id=${category_id}`,
        {
          headers: {
            'bearer-token': 'tokotitohapi',
            'x-partner-code': 'id.marketplace.tokotitoh',
          },
        },
      );
      setList({
        ...list,
        subcategory: result.data.items.rows,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or any async operation
    setTimeout(() => {
      getCategory();
      setRefreshing(false);
    }, 2000);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HomeHeader data={[]} />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: normalize(10),
            gap: normalize(10),
            marginTop: normalize(50),
            width: '100%',
          }}>
          {list?.category?.slice(0, 2)?.map((v: any, i: number) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => {
                  getSubCategory(v?.id);
                  setModal({visible: true});
                }}
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: v?.icon}}
                  style={{width: normalize(120), height: normalize(80)}}
                />
                <Text style={{color: 'black'}}>{v?.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: normalize(100),
            }}>
            <Text
              style={{
                fontSize: normalize(16),
                color: 'blue',
                textAlign: 'center',
              }}>
              Lihat Kategori Lainnya
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: normalize(10),
            gap: normalize(10),
            marginTop: normalize(50),
            width: '100%',
          }}>
          {list?.category?.slice(2, 4)?.map((v: any, i: number) => (
            <View key={i}>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: normalize(100),
                }}>
                <Image
                  source={{uri: v?.icon}}
                  style={{width: normalize(120), height: normalize(80)}}
                />
                <Text style={{color: 'black'}}>{v?.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
          {list?.category?.slice(4, 5)?.map((v: any, i: number) => (
            <View key={i}>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: v?.icon}}
                  style={{width: normalize(100), height: normalize(130)}}
                />
                <Text style={{color: 'black'}}>{v?.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {modal.visible ? (
          <ModalRN modal={modal} setModal={setModal}>
            <Text style={{color: 'black'}}>Pilih Sub Kategori:</Text>
            <View>
              {
                list?.subcategory?.map((v:any, i:number) => (
                  <></>
                ))
              }
              <TouchableOpacity></TouchableOpacity>
            </View>
          </ModalRN>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
