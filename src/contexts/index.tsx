import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ActiveProvider } from "./activePage";
import { AuthProvider } from "./auth";
import { QuestionsProvider } from "./questions";
import { TeamProvider } from "./teamContext";
import { UserProvider } from "./userContext";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProvider>
          <QuestionsProvider>
          <ActiveProvider>
            <TeamProvider>{children}</TeamProvider>
          </ActiveProvider>
          </QuestionsProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
