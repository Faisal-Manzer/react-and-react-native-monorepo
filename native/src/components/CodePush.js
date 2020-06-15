import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import codePush from 'react-native-code-push';


import { styles } from 'styles/default';

export const CodePush = () => {
  const [status, setStatus] = useState('Check for update');

  const codePushDialog = () => {
    setStatus('Checking...');
    codePush.checkForUpdate()
      .then((update) => {
        if (!update)
          setStatus('The app is up to date!');
        else {
          setStatus('An update is available! Should we download it?');
        }
      })
      .finally(() => {
        setTimeout(() => {
          setStatus('Check for update');
        }, 5000);
      });
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Code Push</Text>
      <TouchableOpacity onPress={codePushDialog} type='primary'>
        <Text style={styles.sectionDescription}>
          {status}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
