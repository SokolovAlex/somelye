import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import {
  styleRaisedButton,
  styleH1,
} from '../lib/SharedStyles';
import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

const Index = ({ user }) => (
  <div>
    <Head>
      <title>Open source (MIT License) web app to publish documentation and books</title>
      <meta
        name="description"
        content="Open source web app built with modern JavaScript stack: React, Material UI, Next, Express, Mongoose, and MongoDB. Integrated with AWS SES, Github, Google OAuth, Stripe, and MailChimp."
      />
    </Head>
    <Header user={user} />
    <div style={{ padding: '10px 8%', fontSize: '15px' }}>
      <Grid container direction="row" justify="space-around" align="flex-start">
        <Grid item sm={12} xs={12} style={{ textAlign: 'center' }}>
          <br />
          <h1 style={styleH1}>Open source app</h1>
          <p>
            Open source web app (MIT License) to publish documentation and books.
            <br />
            Built with React, Material-UI, Next, Express, Mongoose, and MongoDB.
          </p>
          <p style={{ textAlign: 'center' }}>
            <Link
              prefetch
              as="/books/builder-book/introduction"
              href="/public/read-chapter?bookSlug=builder-book&chapterSlug=introduction"
            >
              <Button variant="contained" color="primary" style={styleRaisedButton}>
                Live App
              </Button>
            </Link>
          </p>
        </Grid>
      </Grid>
    </div>
    <Footer />
  </div>
);

Index.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default withAuth(withLayout(Index, { noHeader: true }), { loginRequired: false });