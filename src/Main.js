import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import App from "./App"

function Main () {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/content">Content</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/content">
                        <Home />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main;