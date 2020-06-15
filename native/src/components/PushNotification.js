import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OneSignal from 'react-native-onesignal';

import { styles } from 'styles/default';

export const PushNotification = () => {

  const [state, setState] = useState(undefined);

  const getState = () => {
    OneSignal.getPermissionSubscriptionState((status) => {
      setState(status);
    });
  };
  
  const myiOSPromptCallback = (permission) => {
    console.log(permission);
    getState();
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        With Push Notification
      </Text>
      {
        state ? (
          <View>
            <Text style={styles.sectionDescription}>
              Notification
              {' '}
              {/* eslint-disable-next-line no-nested-ternary */}
              {state.notificationsEnabled ? 'Enabled' :
                (state.hasPrompted ? 'Declined' : 'Not Asked')}
            </Text>
            
            {state.hasPrompted? null : (
              <TouchableOpacity
                onPress={() => 
                  OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback)}
                type='primary'>
                <Text>
                  Click to enable push
                </Text>
              </TouchableOpacity>
            )}
            
          </View>
        ) : (
          <Text style={styles.sectionDescription}>
            Loading...
          </Text>
        )
      }
    </View>
  );
};
