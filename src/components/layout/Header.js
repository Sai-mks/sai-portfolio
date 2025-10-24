import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { PORTFOLIO_CONFIG } from '../../utils/constants';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.fixed};
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  transition: all ${theme.transitions.normal};
  border-bottom: ${props => props.scrolled ? `1px solid ${theme.colors.border}` : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text};
  text-decoration: none;
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: ${theme.spacing.xl};
    gap: ${theme.spacing.lg};
    border-top: 1px solid ${theme.colors.border};
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.transitions.normal};
  position: relative;
  padding: ${theme.spacing.sm} 0;
  
  &:hover {
    color: ${theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${theme.gradients.primary};
    transition: width ${theme.transitions.normal};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize['2xl']};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.surface};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo to="/">{PORTFOLIO_CONFIG.name}</Logo>
        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink 
                to={item.path} 
                active={location.pathname === item.path ? 1 : 0}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          ☰
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
