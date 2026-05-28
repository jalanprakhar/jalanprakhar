import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
`

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 82vh;
  padding: 64px 0 48px;
  background:
    linear-gradient(120deg, rgba(34, 211, 238, 0.11), transparent 34%),
    linear-gradient(90deg, ${({ theme }) => theme.colors.graphLine} 1px, transparent 1px),
    linear-gradient(0deg, rgba(125, 242, 230, 0.08) 1px, transparent 1px),
    ${({ theme }) => theme.colors.page};
  background-size: auto, 72px 72px, 72px 72px, auto;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, transparent 0 42%, rgba(34, 211, 238, 0.14) 42.2%, transparent 42.8%),
      linear-gradient(35deg, transparent 0 58%, rgba(24, 207, 195, 0.12) 58.2%, transparent 58.8%);
    opacity: 0.78;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: auto;
    padding: 48px 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 40px 0;
  }
`

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 56px;
  align-items: center;
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: min(100% - 40px, 1120px);
  }
`

export const HeroEyebrow = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.cyan};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const HeroTitle = styled.h1`
  max-width: 760px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 64px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 50px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 42px;
    line-height: 1.08;
  }
`

export const RoleLine = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.18;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 22px;
  }
`

export const HeroLead = styled.p`
  max-width: 680px;
  margin: 20px 0 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 20px;
  line-height: 1.6;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
  }
`

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    margin-top: 24px;
  }
`

export const SignalRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
`

export const HeroVisual = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  grid-template-rows: auto auto;
  gap: 16px;
  align-items: stretch;
  max-width: 440px;
  margin-left: auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border: 1px solid ${({ theme }) => theme.colors.softBorder};
    pointer-events: none;
  }

  &::before {
    top: 32px;
    right: -22px;
    width: 42%;
    height: 64%;
  }

  &::after {
    left: 20px;
    bottom: 76px;
    width: 54%;
    height: 1px;
    background: ${({ theme }) => theme.colors.graphLine};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 12px;
  }
`

export const TraceRail = styled.div`
  grid-row: 1 / span 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(24, 207, 195, 0.14), transparent),
    ${({ theme }) => theme.colors.surfaceElevated};

  &::before {
    content: '';
    position: absolute;
    top: 28px;
    bottom: 28px;
    left: 23px;
    width: 1px;
    background: ${({ theme }) => theme.colors.cyan};
    opacity: 0.48;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    &::before {
      left: 17px;
    }
  }
`

export const Node = styled.span`
  position: relative;
  z-index: 1;
  width: 12px;
  height: 12px;
  border: 2px solid ${({ active, theme }) => active ? theme.colors.cyan : theme.colors.mutedSurface};
  border-radius: 999px;
  background: ${({ active, theme }) => active ? theme.colors.accent : theme.colors.surface};
  box-shadow: ${({ active, theme }) => active ? `0 0 18px ${theme.colors.glow}` : 'none'};
  animation: ${({ active }) => active ? pulse : 'none'} 2400ms ease-in-out infinite;
`

export const PhotoFrame = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 520px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.36);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 8px solid rgba(7, 16, 18, 0.42);
    box-shadow: inset 0 0 0 1px rgba(125, 242, 230, 0.14);
    pointer-events: none;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: 420px;
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 18%;
`

export const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 52px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background:
    linear-gradient(90deg, ${({ theme }) => theme.colors.glow}, transparent),
    ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 13px;
  font-weight: 600;

  @media ${({ theme }) => theme.breakpoints.sm} {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-height: 64px;
  }
`

export const StatusLabel = styled.strong`
  color: ${({ theme }) => theme.colors.cyan};
  font-size: 12px;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const MetricGrid = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`

export const MetricItem = styled.div`
  min-height: 56px;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.softBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
`

export const MetricLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.warmSignal};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
`

export const MetricValue = styled.p`
  margin: 3px 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.35;
`

export const LeftSection = styled.div`
  width: 100%;
`
