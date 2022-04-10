import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";
// import Body from "./components/Body";
// import Chart from "./components/Chart";
import Navii from "./components/Navii";
import Dash from "./components/Dash";
import Search from "./components/Search";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navii/>
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={< Dash/>}></Route>
          <Route exact path='/search' element={<Search/>}></Route>
        </Routes>         
    </Router> 

    </div>
  );
}

export default App;
