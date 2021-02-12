import { useState, useEffect } from 'react';
import liff from '@line/liff';

const useInitial = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    liff.init({ liffId: import.meta.env.SNOWPACK_PUBLIC_LIFF_ID }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        setIsLoggedIn(liff.isLoggedIn());
      }
    });
  }, []);

  return {
    isLoggedIn,
  };
};

export { useInitial };
