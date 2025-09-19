import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const ProjectsContainer = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.xlarge};
    border-color: ${theme.colors.primary};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.gradients.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};
  opacity: 0;
  transition: all ${theme.transitions.normal};
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.xl};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.primary};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.accent};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
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
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    color: ${theme.colors.accent};
  }
`;

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    demo: '#',
    github: '#',
    emoji: '🛒'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration, and project tracking features.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
    demo: '#',
    github: '#',
    emoji: '📋'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, detailed analytics, and weather alerts system.',
    tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Mapbox'],
    demo: '#',
    github: '#',
    emoji: '🌤️'
  }
];

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ProjectsContainer ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        
        <ProjectsGrid>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage>
                {project.emoji}
                <ProjectOverlay>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </ProjectLink>
                </ProjectOverlay>
              </ProjectImage>
              
              <ProjectContent>
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
                  <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    Code
                  </LinkButton>
                  <LinkButton href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </LinkButton>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
}

export default Projects;
