import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <ul className="admin-sidebar__list">
        <li>
          <NavLink to="/admin/product-add" activeClassName="active">
            Product Add
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/product-view" activeClassName="active">
            Product View
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/stocks" activeClassName="active">
            Stocks
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
