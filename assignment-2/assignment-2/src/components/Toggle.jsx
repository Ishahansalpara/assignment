import React, { useState, useEffect } from 'react';
import '../App.css';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div className="toggle-container">
      <button onClick={handleToggle} className="toggle-btn">
        Toggle Theme
      </button>
      <p>{isDarkMode ? 'Dark Mode On' : 'Light Mode On'}</p>
    </div>
  );
};

export default Toggle;
