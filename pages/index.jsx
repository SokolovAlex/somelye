import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../components/Layout/Layout';

const Index = ({ user }) => (
  <Layout>
    <div>{ user }</div>
  </Layout>
);

Index.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default Index;