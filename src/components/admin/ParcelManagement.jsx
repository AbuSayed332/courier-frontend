import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import api from '../../services/api';
import StatusBadge from '../shared/StatusBadge';

const ParcelManagement = () => {
  const { t } = useTranslation();
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    dateFrom: '',
    dateTo: ''
  });

  useEffect(() => {
    fetchParcels();
  }, [filters]);

  const fetchParcels = async () => {
    try {
      const params = {};
      if (filters.status) params.status = filters.status;
      if (filters.dateFrom) params.dateFrom = filters.dateFrom;
      if (filters.dateTo) params.dateTo = filters.dateTo;

      const response = await api.get('/admin/parcels', { params });
      setParcels(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const updateStatus = async (parcelId, newStatus) => {
    try {
      await api.patch(`/admin/parcels/${parcelId}/status`, { status: newStatus });
      fetchParcels();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>{t('loading')}...</div>;

  return (
    <div className="parcel-management">
      <h2>{t('parcel_management')}</h2>
      
      <div className="filters">
        <select
          value={filters.status}
          onChange={(e) => setFilters({...filters, status: e.target.value})}
        >
          <option value="">{t('all_statuses')}</option>
          <option value="pending">{t('pending')}</option>
          <option value="processing">{t('processing')}</option>
          <option value="in_transit">{t('in_transit')}</option>
          <option value="delivered">{t('delivered')}</option>
          <option value="cancelled">{t('cancelled')}</option>
        </select>
        
        <input
          type="date"
          value={filters.dateFrom}
          onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
          placeholder={t('from_date')}
        />
        
        <input
          type="date"
          value={filters.dateTo}
          onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
          placeholder={t('to_date')}
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>{t('tracking_id')}</th>
            <th>{t('sender')}</th>
            <th>{t('receiver')}</th>
            <th>{t('status')}</th>
            <th>{t('created_at')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map(parcel => (
            <tr key={parcel._id}>
              <td>{parcel.trackingId}</td>
              <td>{parcel.sender.name}</td>
              <td>{parcel.receiver.name}</td>
              <td><StatusBadge status={parcel.status} /></td>
              <td>{new Date(parcel.createdAt).toLocaleDateString()}</td>
              <td>
                <select
                  value={parcel.status}
                  onChange={(e) => updateStatus(parcel._id, e.target.value)}
                >
                  <option value="pending">{t('pending')}</option>
                  <option value="processing">{t('processing')}</option>
                  <option value="in_transit">{t('in_transit')}</option>
                  <option value="delivered">{t('delivered')}</option>
                  <option value="cancelled">{t('cancelled')}</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelManagement;