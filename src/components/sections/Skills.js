import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';
import { SKILLS } from '../../utils/constants';

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.border};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const CategoryIcon = styled.span`
  font-size: ${theme.typography.fontSize['2xl']};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const SkillTag = styled(motion.span)`
  background: ${theme.colors.surfaceLight};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  border: 1px solid ${theme.colors.border};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    transform: scale(1.05);
  }
`;

const skillCategories = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    skills: ['JavaScript', 'React.js', 'HTML', 'CSS']
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    skills: ['React Native', 'Expo']
  },
  {
    icon: '🛠️',
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub']
  }
];

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <SkillsContainer ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </SectionTitle>
        
        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>
                <CategoryIcon>{category.icon}</CategoryIcon>
                {category.title}
              </CategoryTitle>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsContainer>
  );
}

export default Skills;
