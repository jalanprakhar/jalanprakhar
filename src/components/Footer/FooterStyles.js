import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: #050A0B;
  color: ${({ theme }) => theme.colors.text};
`

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr auto;
  gap: 32px;
  align-items: start;
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 40px 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: min(100% - 40px, 1120px);
  }
`

export const FooterMeta = styled.div`
  max-width: 520px;
`

export const LinkTitle = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const Slogan = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.6;
`

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
  padding: 0;

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: flex-start;
  }
`

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
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

export const LinkColumn = styled.div``
export const SocialIconsContainer = styled.div``
export const CompanyContainer = styled.div``
export const SocialContainer = styled.div``
