// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';

const App = () => {
  return (
    <Router> {/* Wrap the entire application with BrowserRouter */}
      <Home />
    </Router>
  );
};

export default App;
