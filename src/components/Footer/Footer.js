import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import { profile, profileLinks } from '../../constants/constants'
import {
  FooterInner,
  FooterMeta,
  FooterWrapper,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIcon,
  SocialList,
} from './FooterStyles'

const icons = {
  github: AiFillGithub,
  linkedin: AiFillLinkedin,
  email: MdEmail,
}

const isExternal = (href) => href.startsWith('http')

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterMeta>
          <LinkTitle>{profile.name}</LinkTitle>
          <Slogan>Agentic AI systems, backend platforms, and reliability-focused engineering.</Slogan>
        </FooterMeta>

        <LinkList>
          <li>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href={`mailto:${profile.email}`}>{profile.email}</LinkItem>
          </li>
          <li>
            <LinkTitle>Location</LinkTitle>
            <span>{profile.location}</span>
          </li>
        </LinkList>

        <SocialList aria-label="Footer profile links">
          {profileLinks.map((link) => {
            const Icon = icons[link.type]
            const external = isExternal(link.href)

            return (
              <li key={link.href}>
                <SocialIcon
                  href={link.href}
                  aria-label={link.label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <Icon aria-hidden="true" />
                </SocialIcon>
              </li>
            )
          })}
        </SocialList>
      </FooterInner>
    </FooterWrapper>
  )
}

export default Footer;
