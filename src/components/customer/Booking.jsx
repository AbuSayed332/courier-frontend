import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../context/LanguageContext"; // Changed from ../context/
import api from "../../services/api"; // Also fix this path
import notification from "../../services/notification"; // Also fix this path

const Booking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sender: {
      name: '',
      phone: '',
      address: ''
    },
    receiver: {
      name: '',
      phone: '',
      address: ''
    },
    parcelDetails: {
      description: '',
      weight: '',
      dimensions: {
        length: '',
        width: '',
        height: ''
      }
    },
    paymentMethod: 'cash_on_delivery'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else if (name.includes('dimensions.')) {
      const [_, dimension] = name.split('dimensions.');
      setFormData(prev => ({
        ...prev,
        parcelDetails: {
          ...prev.parcelDetails,
          dimensions: {
            ...prev.parcelDetails.dimensions,
            [dimension]: value
          }
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/parcels', formData);
      notification.success(t('booking_success'));
      navigate(`/tracking/${response.data.trackingId}`);
    } catch (error) {
      console.error(error);
      notification.error(t('booking_error'));
    }
  };

  return (
    <div className="booking-container">
      <h2>{t('new_booking')}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>{t('sender_details')}</h3>
          <div className="form-group">
            <label>{t('name')}</label>
            <input
              type="text"
              name="sender.name"
              value={formData.sender.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t('phone')}</label>
            <input
              type="tel"
              name="sender.phone"
              value={formData.sender.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t('address')}</label>
            <textarea
              name="sender.address"
              value={formData.sender.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-section">
          <h3>{t('receiver_details')}</h3>
          {/* Similar fields as sender */}
        </div>
        
        <div className="form-section">
          <h3>{t('parcel_details')}</h3>
          {/* Parcel details fields */}
        </div>
        
        <div className="form-section">
          <h3>{t('payment_method')}</h3>
          <div className="form-group">
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="cash_on_delivery">{t('cash_on_delivery')}</option>
              <option value="online_payment">{t('online_payment')}</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="btn-submit">
          {t('book_now')}
        </button>
      </form>
    </div>
  );
};

export default Booking;