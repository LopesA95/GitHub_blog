import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme['base-Fundo']};
    color: ${(props) => props.theme.white};
    font-family: "Nunito", sans-serif;
  }
`
