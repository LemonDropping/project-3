import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pong from './components/Games/Pong/Pong';

// Inside your main component
return (
  <Router>
    <Switch>
      {/* Other routes */}
      <Route exact path="/pong" component={Pong} />
    </Switch>
  </Router>
);
