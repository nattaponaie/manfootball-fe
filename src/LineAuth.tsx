import React, { FunctionComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import { QueryObserverResult } from 'react-query';

import { HomeProps } from './pages/home/Home';
import { ProfileProps } from './pages/profile/Profile';

import NavbarComponent from './components/navbar';
import { useInitial, useGetAccessToken, useGetProfile, ProfileType } from './hooks/liff';

interface LineAuthProps {
  pageComponent: React.LazyExoticComponent<React.FunctionComponent<HomeProps | ProfileProps>>;
}
export interface LineProps {
  isLoggedIn: boolean;
  lineAccessToken: string;
  profile: ProfileType | undefined;
}

const LineAuth: FunctionComponent<LineAuthProps> = ({ pageComponent: Component, ...rest }) => {
  const { isLoggedIn } = useInitial();
  const { lineAccessToken } = useGetAccessToken(isLoggedIn);
  const profile = useGetProfile(isLoggedIn);
  
  const line: LineProps = {
    isLoggedIn,
    lineAccessToken,
    profile: profile.data
  }

  const spinner = () => <Spinner animation="border" variant="primary" />;
  const content = () => (
    <>
      <NavbarComponent />
      {<Component lineAuth={line} />}
    </>
  );
  const renderChildren = () => profile.isLoading ? spinner() : content();

  return renderChildren();
};

export default LineAuth;
