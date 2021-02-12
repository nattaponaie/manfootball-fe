import { useState, useEffect } from 'react';
import liff from '@line/liff';

type UseInitialType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const useInitial = (): UseInitialType => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
    setIsLoggedIn,
  };
};

type UseGetAccessTokenType = {
  lineAccessToken: string;
  setLineAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

const useGetAccessToken = (isLoggedIn: boolean): UseGetAccessTokenType => {
  const [lineAccessToken, setLineAccessToken] = useState<string>('');
  useEffect(() => {
    if (!isLoggedIn) return;

    const accessToken = liff.getAccessToken();
    if (accessToken) {
      setLineAccessToken(accessToken);
    }
  }, [isLoggedIn])

  return {
    lineAccessToken,
    setLineAccessToken
  }
}

export { useInitial, useGetAccessToken };
