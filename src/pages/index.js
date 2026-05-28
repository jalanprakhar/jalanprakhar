import Hero from '../components/Hero/Hero'
import { shellSections } from '../constants/constants'
import { Layout } from '../layout/Layout'
import {
  CardKicker,
  CardText,
  CardTitle,
  PageSection,
  SectionCard,
  SectionEyebrow,
  SectionHeader,
  SectionHeading,
  SectionInner,
  SectionLead,
  ShellGrid,
} from '../styles/GlobalComponents'

const sections = shellSections.reduce((acc, section) => {
  acc[section.id] = section
  return acc
}, {})

const ShellSection = ({ section, id, tone }) => (
  <PageSection id={id} tone={tone} bordered>
    <SectionInner>
      <SectionHeader>
        <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
        <SectionHeading>{section.title}</SectionHeading>
        <SectionLead>{section.lead}</SectionLead>
      </SectionHeader>

      <ShellGrid columns={section.cards.length > 2 ? 3 : 2}>
        {section.cards.map((card) => (
          <SectionCard key={`${section.id}-${card.title}`}>
            <CardKicker>{card.kicker}</CardKicker>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.body}</CardText>
          </SectionCard>
        ))}
      </ShellGrid>
    </SectionInner>
  </PageSection>
)

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ShellSection id="experience" section={sections.experience} tone="surface" />
      <ShellSection id="systems" section={sections.systems} />
      <ShellSection id="skills" section={sections.skills} tone="surface" />
      <ShellSection id="contact" section={sections.contact} />
    </Layout>
  )
}

export default Home
