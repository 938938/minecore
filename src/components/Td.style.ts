import { styled } from 'styled-components';
import { GiUnlitBomb, GiCheckeredFlag, GiMineExplosion } from 'react-icons/gi';
import { CODE } from '../store/dataSlice';

export const Td = styled.td<{ type: number }>`
  width: 40px;
  height: 40px;
  border: 1px solid var(--font-line-color);
  text-align: center;
  background-color: ${(props) =>
    props.type >= CODE.OPENED ? 'var(--white-color)' : 'var(--default-color)'};
`;
export const Mine = styled(GiUnlitBomb)``;
export const Flag = styled(GiCheckeredFlag)``;
export const Explosion = styled(GiMineExplosion)``;
