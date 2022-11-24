import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./component/Sidebar";
import { RoutesPages } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Sidebar />
      <RoutesPages />
    </BrowserRouter>
  );
}
