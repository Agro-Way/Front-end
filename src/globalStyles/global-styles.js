import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "National Park", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  input {
    border: none;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background:rgb(28, 34, 21);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background:rgb(26, 46, 20);
  }

`
