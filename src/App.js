import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import CheckouTemplate from "./templates/CheckoutTemplate/CheckouTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";

const CheckouTemplateLazy = lazy(() =>
  import("./templates/CheckoutTemplate/CheckouTemplate")
);

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/home" component={Home} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <HomeTemplate exact path={"/news"} component={News} />
        <HomeTemplate exact path={"/detail/:id"} component={Detail} />

        <Route exact path={"/register"} component={Register} />

        <CheckouTemplate exact path="/checkout/:id" component={Checkout} />
        {/* <Suspense fallback={<h1>Loading......</h1>}>
          <CheckouTemplateLazy
            path="/checkout/:id"
            exact
            component={Checkout}
          />
        </Suspense> */}

        <UserTemplate exact path={"/login"} Component={Login} />

        <HomeTemplate exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
