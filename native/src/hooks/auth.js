import { useEffect, useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets';


GoogleSignin.configure({
  webClientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
  offlineAccess: true,
});

export const useUser = (autoLoad = true) => {
  const [userInfo, setUserInfo] = useState(null);
  const [inProgress, setInProgress] = useState(true);

  const signIn = async () => {
    try {
      setInProgress(true);
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const info = await GoogleSignin.signIn();

      setUserInfo(info);
      setInProgress(false);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        case statusCodes.IN_PROGRESS:
        default:
          setInProgress(false);
      }
    }
  };

  const getCurrentUser = async () => {
    try {
      setInProgress(true);
      setUserInfo(await GoogleSignin.signInSilently());
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_REQUIRED:
        default:
        // pass
      }
    }

    setInProgress(false);
  };

  useEffect(() => {
    if (autoLoad)
      getCurrentUser().then();
  }, []);

  const signOut = async () => {
    setInProgress(true);
    await GoogleSignin.signOut();
    setUserInfo(undefined);
    setInProgress(false);
  };

  const user = userInfo?.user;
  return { userInfo, inProgress, user, signIn, signOut, getCurrentUser };
};
