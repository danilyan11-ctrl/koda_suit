import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.tsx';
import './index.css';
import { installAutoGoalTracking } from "./analytics/metrika";

installAutoGoalTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
