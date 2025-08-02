import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSocket } from '../../context/SocketContext';
import { useTranslation } from '../../context/LanguageContext';
import MapView from '../shared/MapView';
import StatusBadge from '../shared/StatusBadge';
import api from '../../services/api'; // Fixed: changed from ../services/api

const Tracking = () => {
  const { trackingId } = useParams();
  const { socket, realTimeUpdates } = useSocket();
  const { t } = useTranslation();
  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusHistory, setStatusHistory] = useState([]);

  useEffect(() => {
    const fetchParcel = async () => {
      try {
        const response = await api.get(`/parcels/${trackingId}`);
        setParcel(response.data);
        setStatusHistory(response.data.statusHistory || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchParcel();

    // Listen for updates for this specific parcel
    if (socket) {
      socket.emit('joinParcelRoom', trackingId);
    }

    return () => {
      if (socket) {
        socket.emit('leaveParcelRoom', trackingId);
      }
    };
  }, [trackingId, socket]);

  useEffect(() => {
    // Update status history when real-time updates come in
    if (realTimeUpdates.length > 0) {
      const relevantUpdates = realTimeUpdates.filter(
        update => update.parcelId === trackingId
      );
      
      if (relevantUpdates.length > 0) {
        setStatusHistory(prev => [
          ...prev,
          ...relevantUpdates.map(update => ({
            status: update.status,
            timestamp: new Date(update.timestamp),
            location: update.location,
            updatedBy: update.agentId
          }))
        ]);
        
        // Update current status
        const latestUpdate = relevantUpdates[relevantUpdates.length - 1];
        setParcel(prev => ({
          ...prev,
          status: latestUpdate.status,
          currentLocation: latestUpdate.location
        }));
      }
    }
  }, [realTimeUpdates, trackingId]);

  if (loading) return <div>{t('loading')}...</div>;
  if (!parcel) return <div>{t('parcel_not_found')}</div>;

  return (
    <div className="tracking-container">
      <h2>{t('tracking_details')}</h2>
      
      <div className="tracking-header">
        <div>
          <span>{t('tracking_id')}: </span>
          <strong>{parcel.trackingId}</strong>
        </div>
        <StatusBadge status={parcel.status} />
      </div>
      
      <div className="map-section">
        <MapView parcel={parcel} />
      </div>
      
      <div className="details-section">
        <div className="sender-receiver">
          <div>
            <h4>{t('sender')}</h4>
            <p>{parcel.sender.name}</p>
            <p>{parcel.sender.address}</p>
            <p>{parcel.sender.phone}</p>
          </div>
          
          <div>
            <h4>{t('receiver')}</h4>
            <p>{parcel.receiver.name}</p>
            <p>{parcel.receiver.address}</p>
            <p>{parcel.receiver.phone}</p>
          </div>
        </div>
        
        <div className="status-history">
          <h4>{t('status_history')}</h4>
          <ul>
            {statusHistory.map((item, index) => (
              <li key={index}>
                <div className="status-item">
                  <StatusBadge status={item.status} small />
                  <span>{new Date(item.timestamp).toLocaleString()}</span>
                  {item.location && (
                    <span>{item.location.address}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracking;