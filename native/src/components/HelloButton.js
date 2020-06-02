import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { demoButtonClicked } from 'common/actions/demo';

import { styles } from 'styles/default';

export const HelloButton = () => {
  const count = useSelector((state) => state.demo.clicked);
  const dispatch = useDispatch();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello Redux</Text>
      <Text style={styles.sectionDescription}>
        Count:
        {' '}
        {count}
      </Text>
      <TouchableOpacity onPress={() => dispatch(demoButtonClicked())} type='primary'>
        <Text style={styles.sectionDescription}>
          Click me to increase count
        </Text>
      </TouchableOpacity>
    </View>
  );
};
