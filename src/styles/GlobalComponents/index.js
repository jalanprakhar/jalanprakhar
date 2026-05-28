import styled from 'styled-components'

export const PageSection = styled.section`
  width: 100%;
  padding: ${({ compact }) => compact ? '48px 0' : '72px 0'};
  background: ${({ tone, theme }) => tone === 'surface' ? theme.colors.surface : theme.colors.page};
  border-top: ${({ bordered, theme }) => bordered ? `1px solid ${theme.colors.softBorder}` : '0'};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ compact }) => compact ? '40px 0' : '56px 0'};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${({ compact }) => compact ? '32px 0' : '48px 0'};
  }
`

export const SectionInner = styled.div`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: min(100% - 40px, 1120px);
  }
`

export const SectionHeader = styled.div`
  max-width: 720px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 24px;
  }
`

export const SectionEyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const SectionHeading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ main }) => main ? '64px' : '40px'};
  font-weight: 800;
  line-height: ${({ main }) => main ? '1.02' : '1.12'};
  letter-spacing: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ main }) => main ? '48px' : '34px'};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ main }) => main ? '42px' : '30px'};
    line-height: ${({ main }) => main ? '1.08' : '1.16'};
  }
`

export const SectionLead = styled.p`
  max-width: 760px;
  margin: ${({ tight }) => tight ? '12px 0 0' : '16px 0 0'};
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: ${({ large }) => large ? '20px' : '16px'};
  font-weight: 400;
  line-height: ${({ large }) => large ? '1.6' : '1.65'};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 1.6;
  }
`

export const ShellGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, minmax(0, 1fr));
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const SectionCard = styled.article`
  min-height: ${({ compact }) => compact ? '132px' : '168px'};
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 18px 44px rgba(21, 21, 21, 0.05);

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: auto;
    padding: 20px;
  }
`

export const CardKicker = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.warmSignal};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: 0;
`

export const CardText = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 15px;
  line-height: 1.65;
`

export const SignalPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 6px 12px;
  border: 1px solid ${({ active, theme }) => active ? 'rgba(15, 118, 110, 0.28)' : theme.colors.border};
  border-radius: 999px;
  background: ${({ active }) => active ? 'rgba(15, 118, 110, 0.08)' : 'rgba(255, 255, 255, 0.72)'};
  color: ${({ active, theme }) => active ? theme.colors.accent : theme.colors.mutedText};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
`

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 148px;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;

  &:hover {
    background: #0B5F59;
    border-color: #0B5F59;
    transform: translateY(-1px);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`

export const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 136px;
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
  transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`

export const Section = styled(PageSection)``
export const SectionTitle = styled(SectionHeading)``
export const SectionText = styled(SectionLead)``
export const SectionSubText = styled(SectionLead)``

export const SectionDivider = styled.div`
  width: 64px;
  height: 2px;
  margin: ${({ divider }) => divider ? '32px 0' : '16px 0'};
  border-radius: 2px;
  background: ${({ colorAlt, theme }) => colorAlt ? theme.colors.warmSignal : theme.colors.accent};
`

export const SecondaryBtn = styled.button`
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`

export const ButtonBack = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ alt }) => alt ? '150px' : '180px'};
  height: ${({ alt }) => alt ? '48px' : '52px'};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
`

export const ButtonFront = styled.button`
  position: absolute;
  inset: 0;
  border: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ large }) => large ? '16px' : '8px'};
  border-radius: 8px;
`

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '32px' : '24px'};
`
