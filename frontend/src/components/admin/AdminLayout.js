import React from 'react';
import AdminNavbar from '../AdminNavbar';
import AdminSidebar from '../AdminSidebar';

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-layout__main">
        <AdminSidebar />
        <div className="admin-layout__content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
