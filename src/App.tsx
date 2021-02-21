import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import LineAuth, { LineProps } from './LineAuth';

import './App.css';

const HomePage = React.lazy(() => import('./pages/home'));
const ProfilePage = React.lazy(() => import('./pages/profile'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <LineAuth pageComponent={HomePage} />} />
            <Route exact path="/profile" component={() => <LineAuth pageComponent={ProfilePage} />} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
