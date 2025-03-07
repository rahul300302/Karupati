import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar__logo">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <ul className="admin-navbar__links">
        <li>
          <Link to="/admin/profile">Profile</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
