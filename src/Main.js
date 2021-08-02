import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Sub from "./components/Sub";

function Main() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li className="py-2 px-4  bg-gradient-to-r from-violet-400 to-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                <Link to="/">Home</Link>
              </li>
              <li className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                <Link to="/content">Content</Link>
              </li>
              <li className="py-2 px-4  bg-gradient-to-r from-yellow-600 to-yellow-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                <Link to="/picture">Picture</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/content" component={Home} />
            <Route path="/picture" component={Sub} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Main;
