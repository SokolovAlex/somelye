import React from 'react';
import Head from 'next/head'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Header } from './Header';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#006d5c' },
    secondary: { main: '#b2b2b2' },
  },
  typography: {
    useNextVariants: true,
  },
});

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
      <MuiThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Oswald|Pacifico" rel="stylesheet"/>
        </Head>
        <Header></Header>
        { children }
      </MuiThemeProvider>
    );
  };
}

export { Layout };