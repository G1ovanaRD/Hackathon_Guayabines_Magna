import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;