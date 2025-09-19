import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { theme } from '../../styles/theme';

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.text};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.xl};
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
  }
  
  svg {
    color: ${theme.colors.primary};
    font-size: ${theme.typography.fontSize.lg};
    min-width: 20px;
  }
`;

const Form = styled(motion.form)`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.base};
  transition: all ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  resize: vertical;
  transition: all ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.gradients.primary};
  color: ${theme.colors.text};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

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
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>
            
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaEnvelope />
              <span>your.email@example.com</span>
            </ContactItem>
            
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FaPhone />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaMapMarkerAlt />
              <span>Your City, Country</span>
            </ContactItem>
          </ContactInfo>
          
          <Form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
