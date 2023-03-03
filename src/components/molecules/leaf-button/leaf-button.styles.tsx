import { FlattenSimpleInterpolation } from 'styled-components';
import styled from 'styled-components/native';

export const LeafButtonStyled = {
  LeafButton: styled.TouchableOpacity<{ cssButton: FlattenSimpleInterpolation }>`
    ${({ cssButton }) => cssButton}
  `,
};
