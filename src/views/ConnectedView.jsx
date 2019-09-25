import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from 'app/components/Navigation';

// const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      // const layoutProps = {
      //   <Navigation />,
      //   // menu,
      //   pageName
      // };

      return (
        <Layout pageName={pageName} menu={<Navigation/>}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
