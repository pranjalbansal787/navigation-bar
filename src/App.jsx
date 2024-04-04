import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsOpen(false); // Close the nav when an item is clicked
  };

  return (
    <div className="App">
      <div className={`sidenav ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleNav}>&times;</button>
        <a className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</a>
        <a className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>About</a>
        <a className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</a>
      </div>
       {!isOpen  && <span className="openbtn" onClick={toggleNav}>&#9776;</span>}
    </div>
  );
}

export default App;
