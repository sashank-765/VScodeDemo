import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Page from './Components/ListForm/Taskforms/TaskPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Error404 from './Components/PageNotFoundPage/Error404';
import TaskDetails from './Components/TaskDetails/TaskDetails';




function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"><Header />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col">
          <Switch>
            <Route path="/" exact  render = { () => <Redirect to = "/login" />} />
            <Route path="/login" component={Login}  />
            <Route path="/register" component={Register} />
            <Route path="/tasks/:taskid" component={TaskDetails} />
            <Route path="/tasks" exact component={Page} />
            
            <Route path="/**" component={Error404} />
          </Switch>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
