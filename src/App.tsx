import { FC } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Signup from "./components/Signup/Signup";
// import Login from "./components/Login/Login";
// import Map from "./components/Map/Map";
// import Profile from "./components/Profile/Profile";
import { Home } from "./pages";
import { Login, Signup } from "./components";

import { ProtectedRoute } from "./routes";
import { GlobalStyles } from "./app/global-styles";

const routes = ["map", "profile", "logout"];

const authed = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export const App: FC = () => (
  <>
    {/* {authed && <Header routes={routes} />} */}
    <RouterProvider router={router} />
    <GlobalStyles />
  </>

  // <BrowserRouter>
  //   {authed && <Header routes={routes} />}
  //   <Switch>
  //     <Route path="/login" component={Login} />
  //     <Route path="/signup" component={Signup} />
  //     <PrivateRoute path="/profile" component={Profile} authed={authed} />
  //     <PrivateRoute path="/" component={Map} authed={authed} />
  //     <Route path="*" component={Login} />
  //     <Redirect to="/" />
  //   </Switch>
  // </BrowserRouter>
);
