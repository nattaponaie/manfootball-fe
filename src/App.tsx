import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import LineAuth from './LineAuth';

import './App.css';

const HomePage = React.lazy(() => import('./pages/home'));
const ProfilePage = React.lazy(() => import('./pages/profile'));

const queryClient = new QueryClient()

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <BrowserRouter>
          <Switch>
            <QueryClientProvider client={queryClient}>
              {import.meta.env.SNOWPACK_PUBLIC_OPEN_REACT_QUERY_DEV_TOOL === true && <ReactQueryDevtools initialIsOpen={false} />}
              <Route exact path="/" component={() => <LineAuth pageComponent={HomePage} />} />
              <Route exact path="/profile" component={() => <LineAuth pageComponent={ProfilePage} />} />
            </QueryClientProvider>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
