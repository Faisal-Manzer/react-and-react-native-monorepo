import axios from 'axios';

import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useState } from 'react';

import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets';

export const useUser = (autoLoad = true) => {
  const [userInfo, setUserInfo] = useState(null);
  const [inProgress, setInProgress] = useState(true);

  const onLoginSuccess = async (info) => {
    console.log('onLoginSuccess');
    console.log({ info });
    setUserInfo(info);
    setInProgress(false);
    await axios.post('http://localhost/auth/google/', {
      google_id: info.googleId,
      token: info.tokenId,
    });
  };

  const onLoginFail = (...args) => {
    console.log('On Login Fail');
    console.log(args);
    setInProgress(false);
  };

  const onAutoLoadFinished = () => {
    setInProgress(false);
  };

  const { signIn: googleSignIn, loaded: signInLoaded } = useGoogleLogin({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onSuccess: onLoginSuccess,
    onFailure: onLoginFail,
    onAutoLoadFinished,
    fetchBasicProfile: autoLoad,
    // autoLoad,
    isSignedIn: true,
  });

  const onLogoutSuccess = () => {
    setUserInfo(null);
    setInProgress(false);
  };

  const onLogoutFailure = () => {
    setInProgress(false);
  };

  const { signOut: googleSignOut, loaded: signOutLoaded } = useGoogleLogout({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onLogoutSuccess,
    onFailure: onLogoutFailure,
    onAutoLoadFinished,
  });

  const signIn = async () => {
    setInProgress(true);
    await googleSignIn();
  };

  const signOut = async () => {
    setInProgress(true);
    await googleSignOut();
  };

  const user = userInfo?.profileObj;
  const getCurrentUser = async () => {
  };

  return {
    userInfo, user, signIn, signOut, getCurrentUser,
    inProgress: inProgress || !signInLoaded || !signOutLoaded,
  };
};
