import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
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

export type ProfileType = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

const useGetProfile = (isLoggedIn: boolean) => {
  const fetchData = async (): Promise<ProfileType> => {
    if (!isLoggedIn) throw undefined;

    const profileResult = await liff.getProfile();
    const profile: ProfileType = {
      userId: profileResult.userId,
      displayName: profileResult.displayName,
      pictureUrl: profileResult.pictureUrl,
      statusMessage: profileResult.statusMessage
    }
    return profile;
  }

  return useQuery(['getLineProfile', isLoggedIn], () => fetchData());
}

export { useInitial, useGetAccessToken, useGetProfile };
