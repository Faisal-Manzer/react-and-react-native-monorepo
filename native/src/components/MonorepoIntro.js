import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

import { styles } from 'styles/default';

import { SessionTime } from 'components/SessionTime';
import { HelloButton } from './HelloButton';

const repoLink = 'https://github.com/Faisal-Manzer/react-and-react-native-monorepo';

export const MonorepoIntro = () => (
  <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
        <View style={styles.body}>
          <View style={{ ...styles.sectionContainer, alignItems: 'center', flex: 1 }}>
            <Text style={styles.sectionTitle}>Monorepo Introduction</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>React</Text>
            <Text style={styles.sectionDescription}>
              Different guides are available in README.
            </Text>
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => openURLInBrowser(repoLink)}
            >
              <Text style={styles.sectionDescription}>
                https://github.com/Faisal-Manzer/react-and-react-native-monorepo
              </Text>
            </TouchableOpacity>
          </View>
          <HelloButton />
          <SessionTime />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);
