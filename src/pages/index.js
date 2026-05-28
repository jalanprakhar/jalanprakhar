import Hero from '../components/Hero/Hero'
import {
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
    </Layout>
  )
}

export default Home
