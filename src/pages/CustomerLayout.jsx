import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useTranslation } from '../context/LanguageContext.jsx';
import LanguageSelector from '../components/shared/LanguageSelector';

// Import your customer components
import Tracking from '../components/customer/Tracking';
import Booking from '../components/customer/Booking';
import Profile from '../components/customer/Profile';
import CustomerDashboard from '../components/customer/CustomerDashboard'; // Create this if it doesn't exist

const CustomerLayout = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user || user.role !== 'customer') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'customer') {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="customer-layout">
      <header className="customer-header">
        <h1>{t('courier_service')}</h1>
        <div className="header-controls">
          <LanguageSelector />
          <nav>
            <Link to="/customer/tracking">{t('track_parcel')}</Link>
            <Link to="/customer/booking">{t('new_booking')}</Link>
            <Link to="/customer/profile">{t('profile')}</Link>
            <button onClick={handleLogout} className="btn-logout">
              {t('logout')}
            </button>
          </nav>
        </div>
      </header>
      
      <main className="customer-content">
        <Routes>
          <Route index element={<CustomerDashboard />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      
      <footer className="customer-footer">
        <p>{t('copyright')} © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default CustomerLayout;