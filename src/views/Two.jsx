import React from 'react';
import dog from '../images/dog.png';
import Navigation from '../components/Navigation';
import Layout from './Layout';

const Two = () => (
  <Layout menu={Navigation()} pageName="page-two" >
    <h1>Two</h1>

    <img src={dog} className="small-img"/>
  </Layout>
);

export default Two;
