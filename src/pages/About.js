import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxxl} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const Title = styled(motion.h1)`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing.xxxl};
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxxl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const TextContent = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.textSecondary};
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.xlarge};
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 400px;
  background: ${theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['4xl']};
  color: ${theme.colors.text};
`;

function About() {
  return (
    <AboutContainer>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </Title>
        
        <Content
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TextContent>
            <p>
              I'm a passionate full-stack developer with a love for creating 
              beautiful, functional, and user-friendly applications. With 
              expertise in modern web technologies, I enjoy turning complex 
              problems into simple, elegant solutions.
            </p>
            <br />
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community. I believe in continuous learning and 
              staying up-to-date with the latest industry trends.
            </p>
            <br />
            <p>
              My goal is to build applications that make a positive impact 
              and provide exceptional user experiences.
            </p>
          </TextContent>
          
          <ImageContainer>
            <ProfileImage>
              👨‍💻
            </ProfileImage>
          </ImageContainer>
        </Content>
      </Container>
    </AboutContainer>
  );
}

export default About;
