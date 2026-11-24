import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./theme/ThemeProvider";
import ThemeToggle from "./theme/ThemeToggle";
import App from "./App.tsx";
import "./index.css";
import "./theme/theme.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
    <ThemeToggle />
  </ThemeProvider>,
);
