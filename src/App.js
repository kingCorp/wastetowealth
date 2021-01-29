import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//pages
import Home from './pages/home/home';
import ErrorPage from './pages/error/error';

//components
import ScrollToTop from './components/scroll/scroll-to-top';

const App = (props) => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Switch>
      <Route exact path="/" component={Home} />
       
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       Auth.isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//           }}
//         />
//       )
//     }
//   />
// );

export default App;
