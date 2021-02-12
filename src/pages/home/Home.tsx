import React from 'react';
import { Spinner } from 'react-bootstrap';

import { useInitial, useGetAccessToken } from '../../hooks/liff';
import './Home.css';

const Home = () => {
  const { isLoggedIn } = useInitial();
  const { lineAccessToken } = useGetAccessToken(isLoggedIn);

  const spinner = () => <Spinner animation="border" variant="primary" />;

  const content = () => (
    <>{`Home isLoggedIn: ${isLoggedIn} ${lineAccessToken}`}</>
  );

  const showContent = () => (isLoggedIn ? content() : spinner());

  return <div className="Home">{showContent()}</div>;
};

export default Home;
