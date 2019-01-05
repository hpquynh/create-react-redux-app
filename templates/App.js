module.exports = `import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/rootStore';

class App extends React.PureComponent {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            {/*code here*/}
          </BrowserRouter>

        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;
`