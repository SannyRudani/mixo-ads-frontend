import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import { CampaignProvider } from "./context/CampaignContext";

import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CampaignProvider>
      <AppRoutes />
    </CampaignProvider>
  </BrowserRouter>
);
