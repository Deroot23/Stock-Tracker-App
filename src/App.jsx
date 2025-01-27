

import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
 
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.querySelector('.content').classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.querySelector('.content').classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  
  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      
      <div className="toggle-container" onClick={handleToggle}>
      
        <i className={isDarkMode ? "fa fa-toggle-on" : "fa fa-toggle-off"} aria-hidden="true"> </i>
      </div>
      

      <div className="content">
      <h1>So the content will be inside this div </h1>
      </div>
    </div>
  );
}

export default App;
