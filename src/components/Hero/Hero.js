import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      
      <SectionText main center>Hey There,&nbsp; I am</SectionText> 
        <SectionTitle  main center>
          Prakhar Jalan
        </SectionTitle>
        <SectionTitle  main center>
          Full-Stack Developer | Competitve Programmer <br />
          
        </SectionTitle>
        <SectionText>I am
        passionate about building user-friendly, easy-to-use single page applications, that makes a difference to the lives of those around me. I like to explore new trends and learn new technologies. I'm currently looking to collaborate on Open-Source projects
        </SectionText>
        <a href='https://drive.google.com/file/d/1AkOzJNolE81msxquTET4awdzuUfEKyK5/view?usp=sharing' target='_blank'><Button>Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;