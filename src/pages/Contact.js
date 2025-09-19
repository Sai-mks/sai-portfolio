import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ContactContainer = styled.div`
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

const ContactContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.text};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.textSecondary};
  
  svg {
    color: ${theme.colors.primary};
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const Form = styled.form`
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

const SubmitButton = styled.button`
  background: ${theme.gradients.primary};
  color: ${theme.colors.text};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  
  &:hover {
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
    <ContactContainer>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </Title>
        
        <ContactContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactInfo>
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>
            
            <ContactItem>
              <span>📧</span>
              <span>your.email@example.com</span>
            </ContactItem>
            
            <ContactItem>
              <span>📱</span>
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            
            <ContactItem>
              <span>📍</span>
              <span>Your City, Country</span>
            </ContactItem>
          </ContactInfo>
          
          <Form onSubmit={handleSubmit}>
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
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
