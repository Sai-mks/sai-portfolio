import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xxxl} 0 ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const Heart = styled(FaHeart)`
  color: #e74c3c;
  margin: 0 ${theme.spacing.xs};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.lg};
  transition: all ${theme.transitions.normal};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
    background: ${theme.colors.surfaceLight};
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: ${theme.spacing.xl} auto 0;
  padding: ${theme.spacing.lg} ${theme.spacing.xl} 0;
  border-top: 1px solid ${theme.colors.borderLight};
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSize.xs};
`;

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:your.email@example.com',
    label: 'Email',
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          <p>
            © {currentYear} Sai. Made with <Heart /> using React.
          </p>
          <p>
            All rights reserved.
          </p>
        </Copyright>
        <SocialLinks>
          {socialLinks.map((social) => (
            <SocialLink
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon />
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterContent>
      <FooterBottom>
        <p>
          Built with modern web technologies and best practices.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
