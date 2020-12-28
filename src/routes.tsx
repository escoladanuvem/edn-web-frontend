import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;