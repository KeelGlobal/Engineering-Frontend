import React from 'react';
import './TopBar.css';
import KeelLogo from '../../keel-logo.jpeg';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">
            <img src={KeelLogo} alt="Keel-Logo" />
          </span>
        </div>
        <div className="topbar-right">right</div>
      </div>
    </div>
  );
}

export default TopBar;
