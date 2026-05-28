import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.softBorder};
  background: rgba(7, 16, 18, 0.9);
  backdrop-filter: blur(18px);
`

export const NavInner = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: min(1120px, calc(100% - 48px));
  min-height: 72px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: min(100% - 40px, 1120px);
  }
`

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: max-content;
  color: ${({ theme }) => theme.colors.text};
`

export const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
`

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;

  span {
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 12px;
    font-weight: 600;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  transition: background 180ms ease, color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    position: absolute;
    top: 16px;
    right: 0;
  }
`

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`

export const Div1 = styled.div``
export const Div2 = styled.div``
export const Div3 = styled.div``
export const ContactDropDown = styled.button``
export const NavProductsIcon = styled.span``
export const SocialIcons = SocialIcon
