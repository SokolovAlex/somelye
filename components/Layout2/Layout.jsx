import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Header } from './Header';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#006d5c' },
    secondary: { main: '#b2b2b2' },
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
        <Header></Header>
        { children }
      </MuiThemeProvider>
    );
  };
}

export { Layout };