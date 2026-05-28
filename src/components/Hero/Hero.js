import React from 'react'

import { heroCopy, heroMetrics, heroSignals, profile } from '../../constants/constants'
import { PrimaryLink, SecondaryLink, SignalPill } from '../../styles/GlobalComponents'
import {
  CtaRow,
  HeroEyebrow,
  HeroGrid,
  HeroLead,
  HeroSection,
  HeroTitle,
  HeroVisual,
  MetricGrid,
  MetricItem,
  MetricLabel,
  MetricValue,
  Node,
  PhotoFrame,
  ProfileImage,
  RoleLine,
  SignalRow,
  StatusBar,
  StatusLabel,
  TraceRail,
} from './HeroStyles'

const isPublicResume = profile.resumeUrl && !profile.resumeUrl.startsWith('TODO_')

const Hero = () => (
  <HeroSection aria-labelledby="hero-title">
    <HeroGrid>
      <div>
        <HeroEyebrow>{heroCopy.eyebrow}</HeroEyebrow>
        <HeroTitle id="hero-title">{profile.name}</HeroTitle>
        <RoleLine>{heroCopy.role}</RoleLine>
        <HeroLead>{heroCopy.support}</HeroLead>

        <CtaRow>
          <PrimaryLink
            href={isPublicResume ? profile.resumeUrl : '#contact'}
            target={isPublicResume ? '_blank' : undefined}
            rel={isPublicResume ? 'noopener noreferrer' : undefined}
            data-resume-url-status={isPublicResume ? 'ready' : 'todo'}
          >
            {heroCopy.primaryCta}
          </PrimaryLink>
          <SecondaryLink href={profile.github} target="_blank" rel="noopener noreferrer">
            {heroCopy.secondaryCta}
          </SecondaryLink>
        </CtaRow>

        <SignalRow aria-label="Credibility signals">
          {heroSignals.map((signal) => (
            <SignalPill key={signal.label} active={signal.active}>
              {signal.label}
            </SignalPill>
          ))}
        </SignalRow>
      </div>

      <HeroVisual aria-label="Profile photo with production system status">
        <TraceRail aria-hidden="true">
          <Node active />
          <Node />
          <Node />
        </TraceRail>

        <PhotoFrame>
          <ProfileImage src={profile.image} alt="Prakhar Jalan" />
        </PhotoFrame>

        <StatusBar>
          <StatusLabel>Control plane</StatusLabel>
          <span>governed runtime</span>
        </StatusBar>

        <MetricGrid>
          {heroMetrics.map((metric) => (
            <MetricItem key={metric.label}>
              <MetricLabel>{metric.label}</MetricLabel>
              <MetricValue>{metric.value}</MetricValue>
            </MetricItem>
          ))}
        </MetricGrid>
      </HeroVisual>
    </HeroGrid>
  </HeroSection>
)

export default Hero
