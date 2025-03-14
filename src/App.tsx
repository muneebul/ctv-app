import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import { theme } from './styles/theme';
import { GlobalFocusManager } from './utils/focusManager';
import Home from './pages/Home';
import Settings from './pages/Settings';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFocusManager>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </GlobalFocusManager>
      </ThemeProvider>
    </Provider>
  );
};

export default App;