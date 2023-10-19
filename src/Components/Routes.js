import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Dashboard} from "../pages/Dashboard.js";
import {LoginSignup} from "./LoginSignup.js";

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <LoginSignup />
                </Route>

                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
                
            </Switch>
        </Router>
    );
}