import React from 'react';
import Head from 'next/head'

import { Header } from './Header/Header';

class Layout extends React.PureComponent {
  state = {
    showSetting: false,
    progress: true
  }

  toogleSettings() {
    this.setState({
      showSetting: !this.state.showSetting,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Oswald|Pacifico" rel="stylesheet"/>
        </Head>
        <Header></Header>
        { children }
      </React.Fragment>
    );
  };
}

export { Layout };