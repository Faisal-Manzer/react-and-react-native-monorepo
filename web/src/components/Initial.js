import { useEffect } from 'react';
import { getStorage } from 'common/storage';

export const Initial = () => {

  useEffect(() => {
    window.storage = getStorage(window.localStorage);

  }, []);

  return null;
};
