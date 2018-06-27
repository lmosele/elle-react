import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './state/store';

import Page from './views/Page';

import { injectGlobal, ThemeProvider } from 'styled-components';
import theme, { baseStyles, normalize } from './views/theme';
import { Select } from './views/components/elements/select';

// Initializes global styles
export const mergeGlobalStyles = injectGlobal`
  ${normalize}
  ${baseStyles}
  ${Select}
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
    console.log(store.getState());
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Page/>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
