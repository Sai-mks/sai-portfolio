import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
`;

function App() {
  return (
    <AppContainer>
      <ScrollToTop />
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
