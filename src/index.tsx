import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './state/store';

import Page from './views/Page';

import { injectGlobal, ThemeProvider } from 'styled-components';
import theme, { baseStyles, normalize } from './views/theme';

// Initializes global styles
export const mergeGlobalStyles = injectGlobal`
  ${normalize}
  ${baseStyles}
`;

// Triggers state creation
const store = configureStore();

// Nothing for now!
const bootstrapApp = async () => {
  console.log('booted!!');
};

export default class Root extends React.Component {
  public componentDidMount() {
    bootstrapApp();
  }
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Page/>
        </Provider>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
