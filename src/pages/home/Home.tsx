import React, { FunctionComponent } from 'react';
import { Spinner } from 'react-bootstrap';

import { LineProps } from '../../LineAuth';
import './Home.css';

export interface HomeProps {
  lineAuth: LineProps;
};

const Home: FunctionComponent<HomeProps> = ({
  lineAuth: {
    isLoggedIn
  }
}: HomeProps) => {
  const spinner = () => <Spinner animation="border" variant="primary" />;

  const content = () => (
    <>
      {`Home isLoggedIn: ${isLoggedIn}`}
    </>
  );

  const showContent = () => (isLoggedIn ? content() : spinner());

  return <div className="Home">{showContent()}</div>;
};

export default Home;
