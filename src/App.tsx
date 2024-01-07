import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import { ROUTES } from './routes';
import HomeComponent from './pages/home/home';
import DonateComponent from './pages/donate/donate';

function App() {
  return (
    <Router>
        <Routes>
          <Route path={ROUTES.HOME} Component={HomeComponent}/>
          <Route path={ROUTES.DONATE} Component={DonateComponent}/>
        </Routes>
    </Router>
  );
}

export default App;
