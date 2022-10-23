import { Layout } from "./components/modules";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ContentProvider } from "./pages/SignIn/Components/Form/useContext";
import Theme from "./styles/Theme";

const App = () => {
  return (
    <ContentProvider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ContentProvider>
  );
};

export default App;
