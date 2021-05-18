import React from 'react';
import { Route  , Switch} from 'react-router-dom'
import Login from "../Components/login"
import Home from "../Components/Home"
import Dashboard from '../Components/Dashboard/Dashboard';



 function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="*" exact component={Home} />
            </Switch>
        </div>
    )
}
export default Routes