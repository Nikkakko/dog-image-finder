import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './app/store';
import Header from './components/Header/Header';
import './index.css';
import { GlobalStyle, theme } from './lib/themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
