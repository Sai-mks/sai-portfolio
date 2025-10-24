import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { PORTFOLIO_CONFIG } from '../../utils/constants';

const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  z-index: -1;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 0 ${theme.spacing.xl};
`;

const Greeting = styled(motion.p)`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Name = styled(motion.h1)`
  font-size: clamp(${theme.typography.fontSize['4xl']}, 8vw, ${theme.typography.fontSize['6xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: ${theme.typography.lineHeight.tight};
`;

const Title = styled(motion.h2)`
  font-size: clamp(${theme.typography.fontSize['2xl']}, 4vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
  line-height: ${theme.typography.lineHeight.normal};
`;

const Description = styled(motion.p)`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.textSecondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${theme.spacing.xxxl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  &.primary {
    background: ${theme.gradients.primary};
    color: ${theme.colors.text};
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.medium};
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.xl};
  transition: all ${theme.transitions.normal};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
    background: ${theme.colors.surface};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  &::after {
    content: '↓';
    font-size: ${theme.typography.fontSize.lg};
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <Background />
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {PORTFOLIO_CONFIG.name}
        </Name>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I build things for the web and mobile
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {PORTFOLIO_CONFIG.bio}
        </Description>
        
        
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SocialLink 
            href={PORTFOLIO_CONFIG.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href={PORTFOLIO_CONFIG.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink 
            href={PORTFOLIO_CONFIG.website} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGlobe />
          </SocialLink>
          <SocialLink 
            href={PORTFOLIO_CONFIG.social.email}
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </Content>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
      </ScrollIndicator>
    </HeroContainer>
  );
}

export default Hero;
