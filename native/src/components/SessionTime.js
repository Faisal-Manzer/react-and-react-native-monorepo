import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import { styles } from 'styles/default';

export const SessionTime = () => {
  const time = useSelector((state) => state.demo.sessionTime);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Session started</Text>
      <Text style={styles.sectionDescription}>
        {time}
        {' '}
        secs before
      </Text>
    </View>
  );
};
