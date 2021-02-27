import React, { FunctionComponent } from 'react';

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
  return <div className="Home">
      {`Home isLoggedIn: ${isLoggedIn}`}
    </div>;
};

export default Home;
