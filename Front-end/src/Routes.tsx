import { createBrowserRouter} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard.tsx";
import App from "./App.js";
import Profile from "../components/Profile/Profile.tsx";
import PhysicalTracker from "../components/PhysicalTracker/PhysicalTracker.tsx";
import DietaryTracker from "../components/DietaryTracker/DietaryTracker.tsx";
import MentalTracker from "../components/MentalTracker/MentalTracker.tsx";
import Password_Reset from "../components/Password_Reset/Password_Reset.tsx";
// import LoginSignup from "../components/LoginSignup.tsx";

const router = createBrowserRouter([
    {path: "/Team4SoftwareProject", element: <App/>},
    {path: "/Team4SoftwareProject/dashboard", element: <Dashboard/>},
    {path: "/Team4SoftwareProject/profile", element: <Profile/>},
    {path: "/Team4SoftwareProject/physicaltracker", element: <PhysicalTracker/>},
    {path: "/Team4SoftwareProject/dietarytracker", element: <DietaryTracker/>},
    {path: "/Team4SoftwareProject/mentaltracker", element: <MentalTracker/>},
    {path: "/Team4SoftwareProject/password_reset", element: <Password_Reset/>}
])

export default router;