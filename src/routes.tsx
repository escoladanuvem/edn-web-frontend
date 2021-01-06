import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/about" exact component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;