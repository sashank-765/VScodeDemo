import React from 'react';

import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Page from './Components/ListForm/Taskforms/TaskPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';



function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Switch>
        <Route path="/" exact component={Login} ></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/register" component={Register} ></Route>
        <Route path="/tasks" component={Page} ></Route>
      </Switch>
      <hr />
      <Footer />
    </div>
  );
}
export default App;
