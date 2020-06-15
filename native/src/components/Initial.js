import { useEffect } from 'react';

import RNBootSplash from "react-native-bootsplash";
import AsyncStorage from '@react-native-community/async-storage';

import Analytics from 'appcenter-analytics';

import { useUser } from 'hooks/auth';
import { getStorage } from 'common/storage';

export const Initial = () => {
  const { getCurrentUser } = useUser(false);
  
  const init = async () => {
    global.storage = getStorage(AsyncStorage);
    await getCurrentUser();
    await Analytics.trackEvent('SessionStarted');
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide();
    });
  }, []);

  return null;
};
