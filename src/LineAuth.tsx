import React, { FunctionComponent } from 'react';

import { HomeProps } from './pages/home/Home';
import { ProfileProps } from './pages/profile/Profile';

import NavbarComponent from './components/navbar';
import { useInitial, useGetAccessToken } from './hooks/liff';

interface LineAuthProps {
  pageComponent: React.LazyExoticComponent<React.FunctionComponent<HomeProps | ProfileProps>>;
}

export interface LineProps {
  isLoggedIn: boolean;
  lineAccessToken: string;
}

const LineAuth: FunctionComponent<LineAuthProps> = ({ pageComponent: Component, ...rest }) => {
  const { isLoggedIn } = useInitial();
  const { lineAccessToken } = useGetAccessToken(isLoggedIn);
  const line: LineProps = {
    isLoggedIn,
    lineAccessToken
  }

  return (
    <>
      <NavbarComponent />
      {<Component lineAuth={line} />}
    </>
  )
};

export default LineAuth;
