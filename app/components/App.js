var React = require('react');
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Forecast = require('./Forecast');
var Header = require('./Header');
var Details = require('./Details');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/forecast" component={Forecast}/>
            <Route path="/details/:city" component={Details}/>
            <Route render={() => {
              return (
                <h2>404 Page not found.</h2>
              );
            }}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


module.exports = App;
