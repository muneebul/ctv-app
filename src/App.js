import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { theme } from './styles/theme';
import { GlobalFocusManager } from './utils/focusManager';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFocusManager>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </GlobalFocusManager>
    </ThemeProvider>
  );
}

export default App;