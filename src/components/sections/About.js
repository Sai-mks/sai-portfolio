import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';

const AboutContainer = styled.section`
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxxl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const TextContent = styled(motion.div)`
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.textSecondary};
  
  p {
    margin-bottom: ${theme.spacing.lg};
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.xlarge};
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 400px;
  background: ${theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['4xl']};
  color: ${theme.colors.text};
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xxxl};
`;

const SkillCard = styled(motion.div)`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border};
  text-align: center;
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }
`;

const SkillIcon = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  margin-bottom: ${theme.spacing.md};
`;

const SkillTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const SkillDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const skills = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    description: 'React, Vue.js, TypeScript, and modern CSS frameworks'
  },
  {
    icon: '🚀',
    title: 'Backend Development',
    description: 'Node.js, Python, Express, and database management'
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'React Native and cross-platform mobile solutions'
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD, and deployment automation'
  }
];

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <AboutContainer ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        
        <Content>
          <TextContent
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a passionate full-stack developer with over 3 years of experience 
              in creating digital solutions that make a difference. My journey in 
              technology started with curiosity and has evolved into a deep love 
              for building applications that solve real-world problems.
            </p>
            <p>
              I specialize in modern web technologies and enjoy working with 
              React, Node.js, and cloud platforms. My approach to development 
              is user-centered, focusing on creating intuitive and accessible 
              experiences that delight users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community through blog posts and mentoring.
            </p>
          </TextContent>
          
          <ImageContainer
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProfileImage>
              👨‍💻
            </ProfileImage>
          </ImageContainer>
        </Content>
        
        <SkillsGrid
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </AboutContainer>
  );
}

export default About;
