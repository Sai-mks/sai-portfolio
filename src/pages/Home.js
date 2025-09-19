import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

// Components
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: ${theme.spacing.xxxl} 0;
  
  &:nth-child(even) {
    background: ${theme.colors.surface};
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Section>
        <Hero />
      </Section>
      
      <Section>
        <About />
      </Section>
      
      <Section>
        <Skills />
      </Section>
      
      <Section>
        <Projects />
      </Section>
      
      <Section>
        <Contact />
      </Section>
    </HomeContainer>
  );
}

export default Home;
