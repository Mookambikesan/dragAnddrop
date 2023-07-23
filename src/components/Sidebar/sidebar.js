import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBell } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faHome} />
        Home
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faUser} />
        Profile
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faCog} />
        Settings
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faBell} />
        Notifications
      </div>
    </div>
  );
};

export default Sidebar;
