import { styled } from 'styled-components';
import { GiSandsOfTime } from 'react-icons/gi';

export const App = styled.div`
  background-color: var(--bg-color);
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Timer = styled(GiSandsOfTime)``;
