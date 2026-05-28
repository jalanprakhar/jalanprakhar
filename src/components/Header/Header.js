import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import { navItems, profile, profileLinks } from '../../constants/constants'
import {
  Brand,
  BrandMark,
  BrandText,
  Container,
  NavInner,
  NavLink,
  NavLinks,
  SocialIcon,
  SocialLinks,
} from './HeaderStyles'

const icons = {
  github: AiFillGithub,
  linkedin: AiFillLinkedin,
  email: MdEmail,
}

const isExternal = (href) => href.startsWith('http')

const Header = () => (
  <Container>
    <NavInner>
      <Brand href="/" aria-label="Prakhar Jalan home">
        <BrandMark>PJ</BrandMark>
        <BrandText>
          {profile.name}
          <span>{profile.role}</span>
        </BrandText>
      </Brand>

      <NavLinks aria-label="Primary navigation: Experience, Systems, Skills, Contact">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </NavLinks>

      <SocialLinks aria-label="Profile links">
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
      </SocialLinks>
    </NavInner>
  </Container>
)

export default Header;
