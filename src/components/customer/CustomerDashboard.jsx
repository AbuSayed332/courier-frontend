
import React from 'react';
import { useTranslation } from '../../context/LanguageContext';

const CustomerDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="customer-dashboard">
      <h2>Welcome to Customer Dashboard</h2>
      <p>Select an option from the navigation menu above.</p>
    </div>
  );
};

export default CustomerDashboard;