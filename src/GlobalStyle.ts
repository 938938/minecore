import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-line-color: #2B3A55;
    --bg-color: #F2E5E5;
    --point-color: #CE7777;
    --default-color: #E8C4C4;

    --title: 1.5rem;
    --default-font: 1rem;
  }

  *{
    border:0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: var(--default-font);
    list-style: none;
    color:var(--font-line-color);
    border-spacing: 0;
  }
  body{
    width:100%;
    display: flex;
    justify-content: center;
  }
  button{
    cursor:pointer;
    border:1px solid var(--font-line-color)
  }
`;

export default GlobalStyle;
