import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../context/LanguageContext';
import LanguageSelector from '../components/shared/LanguageSelector';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>{t('admin_panel')}</h1>
        <div className="header-controls">
          <LanguageSelector />
          <button onClick={logout} className="btn-logout">
            {t('logout')}
          </button>
        </div>
      </header>
      
      <nav className="admin-sidebar">
        <ul>
          <li>
            <Link to="/admin/dashboard">{t('dashboard')}</Link>
          </li>
          <li>
            <Link to="/admin/parcels">{t('parcel_management')}</Link>
          </li>
          <li>
            <Link to="/admin/agents">{t('agent_management')}</Link>
          </li>
          <li>
            <Link to="/admin/reports">{t('reports')}</Link>
          </li>
        </ul>
      </nav>
      
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;