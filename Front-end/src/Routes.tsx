import { createBrowserRouter} from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard.tsx";
import App from "./App.js";
import Profile from "../components/Profile/Profile.tsx"
// import LoginSignup from "../components/LoginSignup.tsx";

const router = createBrowserRouter([
    {path: "/Team4SoftwareProject", element: <App/>},
    {path: "/Team4SoftwareProject/dashboard", element: <Dashboard/>},
    {path: "/Team4SoftwareProject/profile", element: <Profile/>}
])

export default router;