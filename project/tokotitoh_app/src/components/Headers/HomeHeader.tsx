import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AutocompleteInput from 'react-native-autocomplete-input';
import normalize from 'react-native-normalize';

interface Props {
  data: any;
}

export default function HomeHeader(props: Props) {
  const {data} = props;
  const [query, setQuery] = useState<any>();
  return (
    <View style={styles.header}>
      <AutocompleteInput
        data={data || []}
        style={{color: 'gray', paddingLeft:normalize(10)}}
        value={query}
        onChangeText={e => {
          setQuery(e);
        }}
        placeholder='Cari disini...'
        placeholderTextColor={"gray"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(20),
    borderRadius:20
  },
});
