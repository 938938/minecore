import { styled } from 'styled-components';

export const Form = styled.div`
  padding: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--font-line-color);
`;

export const SubTitle = styled.h2`
  font-size: 1.3rem;
`;

export const Btns = styled.div`
  display: flex;
  width: 100%;
  margin: 5px;
`;

export const Btn = styled.button`
  padding: 5px;
  border-radius: 5px;
  margin: 0 5px;
  background-color: var(--default-color);
  transition: all 0.3s;
  &:hover {
    background-color: var(--point-color);
    color: var(--white-color);
    transition: all 0.3s;
  }
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: row;
  label {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 0.9rem;
  }
  input {
    margin-right: 5px;
    padding: 3px;
    background-color: var(--white-color);
    border-radius: 5px;
  }
`;

export const CustomTitle = styled.p`
  font-weight: bolder;
  margin: 10px 0;
`;
