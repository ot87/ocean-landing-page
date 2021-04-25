import { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';

const renderApp = () => {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
