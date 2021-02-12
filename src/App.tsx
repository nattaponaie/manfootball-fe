import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css';

const HomePage = React.lazy(() => import('./pages/home'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <HomePage />
      </Suspense>
    </div>
  );
};

export default App;
