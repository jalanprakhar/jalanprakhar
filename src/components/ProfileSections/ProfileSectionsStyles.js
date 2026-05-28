import styled from 'styled-components'

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`

export const RoleCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.24);

  > p {
    margin: 16px 0 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 15px;
    line-height: 1.65;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`

export const OracleFeature = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 20px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background:
    linear-gradient(135deg, ${({ theme }) => theme.colors.glow}, transparent 42%),
    ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 24px 72px rgba(0, 0, 0, 0.28);

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`

export const OracleNarrative = styled.div`
  min-width: 0;
`

export const OracleBody = styled.p`
  margin: 16px 0 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 15px;
  line-height: 1.65;
`

export const OracleProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const ProofPanel = styled.div`
  min-height: 128px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.softBorder};
  border-radius: 8px;
  background:
    linear-gradient(140deg, rgba(34, 211, 238, 0.08), transparent 48%),
    ${({ theme }) => theme.colors.surface};

  span {
    display: inline-flex;
    color: ${({ theme }) => theme.colors.cyan};
    font-size: 12px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.warmSignal};
    font-size: 20px;
    font-weight: 800;
    line-height: 1.15;
  }

  p {
    margin: 10px 0 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 13px;
    line-height: 1.55;
  }
`

export const SupportingTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const SupportingRoleCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.softBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`

export const RoleHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  h3 {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: 800;
    line-height: 1.18;
    letter-spacing: 0;
  }

  p {
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 12px;
  }
`

export const RoleMeta = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.warmSignal};
  font-size: 12px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const MetaRow = styled.div`
  display: grid;
  gap: 6px;
  min-width: 148px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.45;
  text-align: right;

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 0;
    text-align: left;
  }
`

export const MetricList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 6px 10px;
    border: 1px solid rgba(245, 158, 11, 0.24);
    border-radius: 8px;
    background: rgba(245, 158, 11, 0.08);
    color: ${({ theme }) => theme.colors.warmSignal};
    font-size: 12px;
    font-weight: 800;
    line-height: 1.3;
  }
`

export const ImpactList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 18px;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 15px;
    line-height: 1.65;
  }

  li::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
  }
`

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: auto 0 0;
  padding: 24px 0 0;
  list-style: none;

  li {
    min-height: 30px;
    padding: 6px 10px;
    border: 1px solid ${({ theme }) => theme.colors.softBorder};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const SystemCard = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 336px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);

  h3 {
    margin: 10px 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 22px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0;
  }

  strong {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.warmSignal};
    font-size: 16px;
    line-height: 1.3;
  }

  p {
    margin: 14px 0 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 15px;
    line-height: 1.65;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: auto;
    padding: 20px;
  }
`

export const ProofList = styled.ul`
  display: grid;
  gap: 8px;
  margin: auto 0 0;
  padding: 24px 0 0;
  list-style: none;

  li {
    min-height: 32px;
    padding: 7px 10px;
    border-left: 2px solid ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
  }
`

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const SkillCard = styled.article`
  min-height: 260px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 21px;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 14px;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: auto;
    padding: 20px;
  }
`

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;

  li {
    min-height: 30px;
    padding: 6px 10px;
    border: 1px solid ${({ theme }) => theme.colors.softBorder};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const CredentialGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 0.9fr;
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const CredentialColumn = styled.article`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};

  h3 {
    margin: 0 0 18px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`

export const CredentialList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const CredentialItem = styled.li`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 15px;
  line-height: 1.6;
`

export const DetailList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: grid;
    gap: 6px;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 14px;
    line-height: 1.5;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 1.3;
  }
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const ContactCard = styled.article`
  min-height: 164px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(34, 211, 238, 0.08), transparent 44%),
    ${({ theme }) => theme.colors.surfaceElevated};

  h3,
  a {
    display: inline-flex;
    margin: 10px 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 19px;
    font-weight: 800;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  p {
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 14px;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: auto;
    padding: 20px;
  }
`

export const ContactLink = styled.a`
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const ContactStatus = styled.p`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  margin: 16px 0 0;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.softBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.cyan};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`
