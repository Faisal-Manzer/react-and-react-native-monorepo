import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from 'styles/default';
import { useUser } from 'hooks/auth';

export const Auth = () => {
  const { user, signIn, signOut, inProgress } = useUser();

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Signin with google</Text>
        {
          inProgress ? (
            <Text>
              Loading...
            </Text>
          ) : null
        }

        {
          user ? (
            <TouchableOpacity onPress={signOut} type='primary'>
              <Text style={styles.sectionDescription}>
                Hello
                {' '}
                {user.givenName}
                {' '}
                [sign-out]
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={signIn} type='primary'>
              <Text style={styles.sectionDescription}>
                Click to sign-in
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
    </>
  );
};
