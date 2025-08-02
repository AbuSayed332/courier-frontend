import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import api from '../services/api';
import StatusBadge from '../shared/StatusBadge';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalParcels: 0,
    delivered: 0,
    inTransit: 0,
    pending: 0
  });
  const [recentParcels, setRecentParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, parcelsRes] = await Promise.all([
          api.get('/admin/dashboard/stats'),
          api.get('/admin/parcels/recent')
        ]);
        
        setStats(statsRes.data);
        setRecentParcels(parcelsRes.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  if (loading) return <div>{t('loading')}...</div>;

  return (
    <div className="admin-dashboard">
      <h2>{t('dashboard')}</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{t('total_parcels')}</h3>
          <p>{stats.totalParcels}</p>
        </div>
        
        <div className="stat-card">
          <h3>{t('delivered')}</h3>
          <p>{stats.delivered}</p>
        </div>
        
        <div className="stat-card">
          <h3>{t('in_transit')}</h3>
          <p>{stats.inTransit}</p>
        </div>
        
        <div className="stat-card">
          <h3>{t('pending')}</h3>
          <p>{stats.pending}</p>
        </div>
      </div>
      
      <div className="recent-parcels">
        <h3>{t('recent_parcels')}</h3>
        <table>
          <thead>
            <tr>
              <th>{t('tracking_id')}</th>
              <th>{t('sender')}</th>
              <th>{t('receiver')}</th>
              <th>{t('status')}</th>
              <th>{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {recentParcels.map(parcel => (
              <tr key={parcel._id}>
                <td>{parcel.trackingId}</td>
                <td>{parcel.sender.name}</td>
                <td>{parcel.receiver.name}</td>
                <td><StatusBadge status={parcel.status} /></td>
                <td>
                  <button className="btn-view">
                    {t('view')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;