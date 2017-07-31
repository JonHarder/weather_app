var React = require('react');
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Forecast = require('./Forecast');

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/forecast" component={Forecast}/>
          <Route render={() => {
            return (
              <h2>404 Page not found.</h2>
            );
          }}/>
        </Switch>
      </Router>
    );
  }
}


module.exports = App;
