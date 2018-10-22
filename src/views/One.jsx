import React from 'react';
import dog from '../images/dog.png';
import Navigation from '../components/Navigation';
import Layout from './Layout';

const One = () => (
  <Layout menu={Navigation()} pageName="page-one" >
    <h1>One</h1>
    <img src={dog} className="small-img"/>
  </Layout>
);

export default One;
