import styled from 'styled-components/native';
import { Title } from './title';

export const OnboardingTitle = styled(Title)<{ isCentered?: boolean }>`
  margin-bottom: 12px;
  text-align: ${props => (props.isCentered ? 'center' : 'left')};
`;
