import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Network from './pages/Network';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/about" exact component={About} />
                <Route path="/network" exact component={Network} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;