import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';


class Router extends React.Component {
  state = {
  }


  // had to use render in order to pass props
  render() {
    return (

      <Fragment>
        <Navbar auth={this.state.isAuthenticated} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/signup" render={props => <Signup {...props} updateIsLoggedIn={this.updateIsLoggedIn} />} />
          <Route path="/login" render={props => <Login {...props} updateIsLoggedIn={this.updateIsLoggedIn} />} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default Router;
