import React from 'react'

import {
  contactHighlights,
  credentials,
  experienceItems,
  profile,
  skillGroups,
  systemProofs,
} from '../../constants/constants'
import {
  PageSection,
  SectionEyebrow,
  SectionHeader,
  SectionHeading,
  SectionInner,
  SectionLead,
} from '../../styles/GlobalComponents'
import {
  ContactCard,
  ContactGrid,
  ContactLink,
  ContactStatus,
  CredentialColumn,
  CredentialGrid,
  CredentialItem,
  CredentialList,
  DetailList,
  HighlightGrid,
  ImpactList,
  MetaRow,
  MetricList,
  OracleBody,
  OracleFeature,
  OracleNarrative,
  OracleProofGrid,
  ProofPanel,
  ProofList,
  RoleHeader,
  RoleMeta,
  SupportingRoleCard,
  SupportingTimeline,
  SkillCard,
  SkillGrid,
  SkillList,
  StackList,
  SystemCard,
} from './ProfileSectionsStyles'

const isExternal = (href) => href && href.startsWith('http')

export const ExperienceSection = () => {
  const [featuredExperience, ...supportingExperiences] = experienceItems

  return (
    <PageSection id="experience" tone="surface" bordered>
      <SectionInner>
        <SectionHeader>
          <SectionEyebrow>Experience</SectionEyebrow>
          <SectionHeading>Professional systems, in reverse chronological order</SectionHeading>
          <SectionLead>
            Resume-backed roles focused on agentic AI systems, backend platforms, and operational impact.
          </SectionLead>
        </SectionHeader>

        <OracleFeature>
          <OracleNarrative>
            <RoleHeader>
              <div>
                <RoleMeta>{featuredExperience.emphasis}</RoleMeta>
                <h3>{featuredExperience.company}</h3>
                <p>{featuredExperience.role}</p>
              </div>
              <MetaRow>
                <span>{featuredExperience.period}</span>
                <span>{featuredExperience.location}</span>
              </MetaRow>
            </RoleHeader>

            <OracleBody>{featuredExperience.summary}</OracleBody>

            <MetricList aria-label={`${featuredExperience.company} impact metrics`}>
              {featuredExperience.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </MetricList>

            <ImpactList>
              {featuredExperience.impact.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ImpactList>

            <StackList aria-label={`${featuredExperience.company} stack`}>
              {featuredExperience.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </StackList>
          </OracleNarrative>

          <OracleProofGrid aria-label="Oracle MTS-1 proof panels">
            {featuredExperience.proofPanels.map((panel) => (
              <ProofPanel key={`${panel.label}-${panel.value}`}>
                <span>{panel.label}</span>
                <strong>{panel.value}</strong>
                <p>{panel.description}</p>
              </ProofPanel>
            ))}
          </OracleProofGrid>
        </OracleFeature>

        <SupportingTimeline aria-label="Supporting professional timeline">
          {supportingExperiences.map((item) => (
            <SupportingRoleCard key={`${item.company}-${item.role}`}>
              <RoleHeader>
                <div>
                  <RoleMeta>{item.emphasis}</RoleMeta>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <MetaRow>
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </MetaRow>
              </RoleHeader>

              <OracleBody>{item.summary}</OracleBody>

              <MetricList aria-label={`${item.company} impact metrics`}>
                {item.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </MetricList>

              <ImpactList>
                {item.impact.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ImpactList>

              <StackList aria-label={`${item.company} stack`}>
                {item.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </StackList>
            </SupportingRoleCard>
          ))}
        </SupportingTimeline>
      </SectionInner>
    </PageSection>
  )
}

export const SystemsSection = () => (
  <PageSection id="systems" bordered>
    <SectionInner>
      <SectionHeader>
        <SectionEyebrow>Systems</SectionEyebrow>
        <SectionHeading>Production agentic systems</SectionHeading>
        <SectionLead>
          Selected Oracle systems showing orchestration, governance, incident triage, and control-plane reliability.
        </SectionLead>
      </SectionHeader>

      <HighlightGrid>
        {systemProofs.map((system) => (
          <SystemCard key={system.title}>
            <RoleMeta>{system.label}</RoleMeta>
            <h3>{system.title}</h3>
            <strong>{system.metric}</strong>
            <p>{system.body}</p>
            <ProofList>
              {system.proof.map((proof) => (
                <li key={proof}>{proof}</li>
              ))}
            </ProofList>
          </SystemCard>
        ))}
      </HighlightGrid>
    </SectionInner>
  </PageSection>
)

export const SkillsSection = () => (
  <PageSection id="skills" tone="surface" bordered>
    <SectionInner>
      <SectionHeader>
        <SectionEyebrow>Skills</SectionEyebrow>
        <SectionHeading>Technical operating range</SectionHeading>
        <SectionLead>
          Agentic AI, backend/platform, cloud/devops, and fundamentals grouped for quick scanning.
        </SectionLead>
      </SectionHeader>

      <SkillGrid>
        {skillGroups.map((group) => (
          <SkillCard key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <SkillList>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillGrid>
    </SectionInner>
  </PageSection>
)

export const CredentialsSection = () => (
  <PageSection id="credentials" bordered compact>
    <SectionInner>
      <SectionHeader>
        <SectionEyebrow>Credentials</SectionEyebrow>
        <SectionHeading>Achievements, education, and engineering leadership</SectionHeading>
        <SectionLead>
          Compact proof points that support the professional systems story without competing with the experience spine.
        </SectionLead>
      </SectionHeader>

      <CredentialGrid>
        <CredentialColumn>
          <h3>Achievements</h3>
          <CredentialList>
            {credentials.achievements.map((item) => (
              <CredentialItem key={item}>{item}</CredentialItem>
            ))}
          </CredentialList>
        </CredentialColumn>

        <CredentialColumn>
          <h3>Responsibilities</h3>
          <CredentialList>
            {credentials.responsibilities.map((item) => (
              <CredentialItem key={item}>{item}</CredentialItem>
            ))}
          </CredentialList>
        </CredentialColumn>

        <CredentialColumn>
          <h3>Education</h3>
          <DetailList>
            {credentials.education.map((item) => (
              <li key={item.institution}>
                <strong>{item.institution}</strong>
                <span>{item.program}</span>
                <span>{item.meta}</span>
                <span>{item.period}</span>
              </li>
            ))}
          </DetailList>
        </CredentialColumn>
      </CredentialGrid>
    </SectionInner>
  </PageSection>
)

export const ContactSection = () => (
  <PageSection id="contact" tone="surface" bordered>
    <SectionInner>
      <SectionHeader>
        <SectionEyebrow>Contact</SectionEyebrow>
        <SectionHeading>Build the next production agent system</SectionHeading>
        <SectionLead>
          Reach out through email, GitHub, or LinkedIn. Phone number is intentionally not published.
        </SectionLead>
        <ContactStatus>Based in {profile.location}</ContactStatus>
      </SectionHeader>

      <ContactGrid>
        {contactHighlights.map((item) => (
          <ContactCard key={item.label}>
            <RoleMeta>{item.label}</RoleMeta>
            {item.href ? (
              <ContactLink
                href={item.href}
                target={isExternal(item.href) ? '_blank' : undefined}
                rel={isExternal(item.href) ? 'noopener noreferrer' : undefined}
              >
                {item.title}
              </ContactLink>
            ) : (
              <h3>{item.title}</h3>
            )}
            <p>{item.body}</p>
          </ContactCard>
        ))}
      </ContactGrid>
    </SectionInner>
  </PageSection>
)
