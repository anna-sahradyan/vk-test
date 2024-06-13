import React from 'react';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
