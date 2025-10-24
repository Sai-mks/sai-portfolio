import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { PORTFOLIO_CONFIG } from '../../utils/constants';

const ContactContainer = styled.section`
  padding: ${theme.spacing.xxxl} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.typography.fontSize['4xl']};
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
  min-height: 400px;
`;

const ContactItems = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

const ContactInfo = styled(motion.div)`
  text-align: center;
  
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.text};
  }
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  min-width: 200px;
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  svg {
    color: ${theme.colors.primary};
    font-size: ${theme.typography.fontSize.xl};
    min-width: 24px;
  }
  
  &:hover svg {
    color: ${theme.colors.text};
  }
`;


function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ContactContainer ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's work together</h3>
            
            <ContactItems>
              <ContactItem
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope />
                <span>{PORTFOLIO_CONFIG.email}</span>
              </ContactItem>
              
              <ContactItem
                href={`tel:${PORTFOLIO_CONFIG.phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaPhone />
                <span>{PORTFOLIO_CONFIG.phone}</span>
              </ContactItem>
            </ContactItems>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
