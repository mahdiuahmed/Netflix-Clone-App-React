import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';


function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
      {!user ? (
        <LoginScreen/>
      ) : (
        <Routes>
            <Route exact path='/' element={<HomeScreen/>}>
            </Route>
          </Routes>
      )}
      </Router>
    </div>
          
  );
}

export default App;
