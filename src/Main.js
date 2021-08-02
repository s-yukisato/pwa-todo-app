import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import App from "./App";

function Main() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                <Link to="/content">Content</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/content" component={Home} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Main;
