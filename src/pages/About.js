import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import photo from '../assets/photo.png';

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

const ProfileImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius.xl};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.glow};
  }
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
              I'm a passionate Frontend Developer with 8 months of hands-on experience 
              in developing web and mobile applications. My journey in technology 
              started with curiosity and has evolved into a deep love for building 
              applications that solve real-world problems.
            </p>
            <br />
            <p>
              I specialize in React.js, React Native, and modern web technologies. 
              I have experience integrating with React Native for cross-platform mobile 
              app development and have worked on live projects including HiFix Service, 
              HiFix Customer and HiFix Website.
            </p>
            <br />
            <p>
              I'm constantly learning new tools and technologies to stay updated with 
              frontend trends. I have hands-on experience in web applications development 
              using HTML, CSS, and React JS, with knowledge of MySQL for data retrieval 
              and display on the frontend.
            </p>
          </TextContent>
          
          <ImageContainer>
            <ProfileImage src={photo} alt="Sai Kumar - Frontend Developer" />
          </ImageContainer>
        </Content>
      </Container>
    </AboutContainer>
  );
}

export default About;
