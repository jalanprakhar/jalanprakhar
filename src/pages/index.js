import Hero from '../components/Hero/Hero'
import {
  ContactSection,
  CredentialsSection,
  ExperienceSection,
  SkillsSection,
  SystemsSection,
} from '../components/ProfileSections/ProfileSections'
import { Layout } from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <SystemsSection />
      <SkillsSection />
      <CredentialsSection />
      <ContactSection />
    </Layout>
  )
}

export default Home
