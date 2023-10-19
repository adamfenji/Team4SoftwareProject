import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Dashboard} from "../pages/Dashboard.jsx";
import LoginSignup from "./LoginSignup.tsx";

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
        
                    <LoginSignup.tsx />
                </Route>
                <Route path="/Dashboard">
                    
                    <Dashboard.jsx />
                </Route>
             </Switch>
        </Router>
    );
}