import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import { theme } from './styles/theme';
import { GlobalFocusManager } from './utils/focusManager';
import Home from './pages/Home';
import Settings from './pages/Settings';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFocusManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </GlobalFocusManager>
    </ThemeProvider>
  );
};

export default App;