import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { PORTFOLIO_CONFIG } from '../utils/constants';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.xxxl} 0 0;
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

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const ContactItems = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  max-width: 600px;
  
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.text};
  }
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  min-width: 180px;
  font-size: ${theme.typography.fontSize.sm};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  svg {
    color: ${theme.colors.primary};
    font-size: ${theme.typography.fontSize.lg};
    min-width: 20px;
  }
  
  &:hover svg {
    color: ${theme.colors.text};
  }
`;

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const AvailabilitySection = styled.div`
  margin-top: ${theme.spacing.xl};
  text-align: center;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border};
`;

const AvailabilityText = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSize.sm};
  margin: 0;
`;

const SkillsSection = styled.div`
  margin-top: ${theme.spacing.lg};
  text-align: center;
`;

const SkillsTitle = styled.h4`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const SkillTag = styled.span`
  background: ${theme.colors.surfaceLight};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  border: 1px solid ${theme.colors.border};
`;


function Contact() {
  return (
    <ContactContainer className="contact-page">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </Title>
        
        <ContactContent>
          <ContactInfo>
            <h3>Let's work together</h3>
            <Description>
              I'm a passionate Frontend Developer with 8 months of hands-on experience 
              in developing web and mobile applications. I specialize in React.js, React Native, 
              and modern web technologies, with experience working on live projects including 
              HiFix and Rotiwala applications.
            </Description>
            
            <ContactItems>
              <ContactItem
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope />
                <span>{PORTFOLIO_CONFIG.email}</span>
              </ContactItem>
              
              <ContactItem
                href={`tel:${PORTFOLIO_CONFIG.phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaPhone />
                <span>{PORTFOLIO_CONFIG.phone}</span>
              </ContactItem>
            </ContactItems>
            
            <AvailabilitySection>
              <AvailabilityText>
                Available for freelance projects and full-time opportunities
              </AvailabilityText>
            </AvailabilitySection>
            
            <SkillsSection>
              <SkillsTitle>Technical Skills</SkillsTitle>
              <SkillsList>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>React.js</SkillTag>
                <SkillTag>React Native</SkillTag>
                <SkillTag>HTML</SkillTag>
                <SkillTag>CSS</SkillTag>
                <SkillTag>Expo</SkillTag>
                <SkillTag>Git</SkillTag>
                <SkillTag>GitHub</SkillTag>
              </SkillsList>
            </SkillsSection>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
