import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Rotas from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <GlobalStyle />
        <Rotas />
      </Router>
    </ThemeProvider>
  );
}
