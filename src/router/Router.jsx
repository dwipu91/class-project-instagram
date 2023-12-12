import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";

const router = createBrowserRouter([
  {
    element: <LoginPage />,
    path: "/",
  }
]);
export default router;
