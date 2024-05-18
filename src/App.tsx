import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
<<<<<<< HEAD
import Rotas from "./routes";
=======
import { Home } from "./pages";
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
<<<<<<< HEAD
      <Router>
        <GlobalStyle />
        <Rotas />
      </Router>
=======
      <GlobalStyle />
      <Home />
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
    </ThemeProvider>
  );
}
