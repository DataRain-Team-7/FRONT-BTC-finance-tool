import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from "../styles/theme";
import { AuthProvider } from "./auth";
import { TeamProvider } from "./teams";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
              {children}    
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;