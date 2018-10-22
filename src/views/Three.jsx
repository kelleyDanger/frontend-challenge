import React from 'react';
import Navigation from '../components/Navigation';
import Layout from './Layout';

const Three = () => (
  <Layout menu={Navigation()} pageName="page-two" >
    <h1>Three</h1>
    <p>Enjoy!</p>
  </Layout>
);

export default Three;
