import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "@fortawesome/fontawesome-free/js/all.js";
import "./index.css";

import App from "./app";
import { QueryClient, QueryClientProvider } from "react-query";
import FoodService from "./service/foodService";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const foodService = new FoodService();

root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App foodService={foodService} />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
