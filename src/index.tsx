import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModeContextProvider } from "./store/mode-context";
import { QueryClient, QueryClientProvider } from "react-query";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <ModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeContextProvider>
  </QueryClientProvider>
);
