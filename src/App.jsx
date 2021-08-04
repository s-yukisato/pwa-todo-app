import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./pages/Content"
import Home from "./pages/Home";
import Navi from "./components/Navi";
import Circlem from "./components/Circle";
import Swipe from "./components/Swipe"
import Header from "./components/Header"

export const BASE_URL = process.env.NODE_ENV === 'production' ? '/pwa-todo-app/' : '/'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0">
        <Header title="Home" />
      </div>
      <Router>
        <div className="bg-gray-300 bg-opacity-90 flex items-center flex-auto justify-center">
          <Switch>
            <Route path={`${BASE_URL}content`}>
              <Content />
            </Route>
            <Route path={`${BASE_URL}picture`}>
              <Home />
            </Route>
            <Route path={`${BASE_URL}loading`}>
              <Swipe />
            </Route>
            <Route path={BASE_URL} component={Circlem} />
          </Switch>
        </div>
        <div className="sticky bottom-0">
          <div className="bg-gray-300 shadow-2xl">
            <Navi />
          </div>
        </div>
      </Router>
    </div>
  )
}