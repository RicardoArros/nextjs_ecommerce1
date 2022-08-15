import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;

    font-size: 62.5%;

    scroll-behavior: smooth;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    
    padding: 0;
    margin: 0;
  }  

  body {    
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text1};

    cursor: default;    
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.title};
    
  }   

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  button {
    font-family: inherit;
    color: inherit;

    border: none;
    outline: none;
    
    cursor: pointer;

    &:focus {
      outline: solid #cc5e95;
    }

    &:active {
      //outline: none;
      //border: none;
    }
  }

  input, textarea, button {
    font-family: inherit;
  }

  input {
    width: 100%;

    padding: .7rem 1rem;

    border-radius: ${({ theme }) => theme.borderRadius.radiusInput};
    border: 1px solid ${({ theme }) => theme.colors.neutral};

    &:focus {
      outline: solid #cc5e95;
    }

  }
`;

export default GlobalStyles;
