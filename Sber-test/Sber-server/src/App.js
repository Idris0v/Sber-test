import React from 'react';
import {BrowserRouter as Router, Route} from'react-router-dom';

import Users from "./components/AllUsers";
import Navigationbar from './components/NavigationBar';
import AllUsers from './components/AllUsers';
import AddForm from './components/AddForm'
import FindForm from './components/FindForm'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigationbar />
      <Route path='/getUser' component={FindForm} exact/>
      <Route path='/addUser' component={AddForm} />
      <Route path='/getAll' component={AllUsers} />
    </div>
    </Router>
  );
}

export default App;
