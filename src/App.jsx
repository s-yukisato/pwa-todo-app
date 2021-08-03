import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sub from "./components/Sub";
import Loading from "./components/Loading";
import Navi from "./components/Navi";
import Circlem from "./components/Circle";

export const BASE_URL = process.env.NODE_ENV === 'production' ? '/pwa-todo-app/' : '/'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <div className="bg-gray-300 bg-opacity-90 flex items-center flex-auto justify-center text-white">
          <Switch>
            <Route path={`${BASE_URL}content`} exact component={Home} />
            <Route path={`${BASE_URL}picture`} exact component={Sub} />
            <Route path={`${BASE_URL}loading`} exact component={Loading} />
            <Route path={BASE_URL} component={Circlem} />
          </Switch>
        </div>
        <div className="sticky bottom-0">
          <Navi />
        </div>
      </Router>
    </div>
  )
}