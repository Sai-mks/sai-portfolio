import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { PROJECTS } from '../utils/constants';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xxxl};
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xlarge};
    border-color: ${theme.colors.primary};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.gradients.secondary};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.text};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const TechTag = styled.span`
  background: ${theme.colors.surfaceLight};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const ProjectLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    color: ${theme.colors.accent};
  }
`;

// Use the real projects from constants
const projects = PROJECTS;

function Projects() {
  return (
    <ProjectsContainer>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </Title>
        
        <ProjectsGrid
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <ProjectImage>
                {(project.title.toLowerCase().includes('rotiwala') || project.title.toLowerCase().includes('rottiwala')) ? (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
                    borderRadius: '12px', 
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: '2px solid #e9ecef',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={process.env.PUBLIC_URL + '/rotiwala.jpg'} 
                      alt="Rottiwala Logo" 
                      style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                        transition: 'transform 0.3s ease'
                      }}
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log('Rottiwala image loaded successfully')}
                    />
                  </div>
                ) : (project.title.toLowerCase().includes('hifix')) ? (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
                    borderRadius: '12px', 
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: '2px solid #e9ecef',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={process.env.PUBLIC_URL + '/hifix.png'} 
                      alt="HiFix Logo" 
                      style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                        transition: 'transform 0.3s ease'
                      }}
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log('HiFix image loaded successfully')}
                    />
                  </div>
                ) : (
                  project.emoji
                )}
              </ProjectImage>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
}

export default Projects;
