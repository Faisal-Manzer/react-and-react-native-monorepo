import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { css } from 'styles';
import { styles } from 'styles/default';

export const Tailwind = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>With tailwindcss</Text>
    <View style={css('max-w-sm bg-white rounded-lg overflow-hidden')}>
      <View style={css('px-6 py-4')}>
        <View>
          <Image
            style={[css('rounded-full self-center'), { height: 160, width: 160 }]}
            source={{
              uri: 'https://randomuser.me/api/portraits/women/17.jpg',
            }}
            alt="Woman's Face" />
        </View>
        <View style={css('mt-4 ')}>
          <Text style={css('text-xl text-center')}>Erin Lindford</Text>
          <Text style={css('text-sm text-gray-600 text-center')}>
            Customer Support Specialist
          </Text>
          <View style={css('mt-4')}>
            <TouchableOpacity style={css('border border-purple-500 rounded-full px-4 py-1')}>
              <Text style={css('text-purple-500 text-center text-base font-semibold')}>
                Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </View>
);
