import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>  
    </ThemeProvider>
  </React.StrictMode>
);


