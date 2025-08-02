import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const Profile = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/customer/profile');
      setProfile(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        address: response.data.address
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/customer/profile', formData);
      setProfile({ ...profile, ...formData });
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!profile) return <div>{t('loading')}...</div>;

  return (
    <div className="profile">
      <h2>{t('my_profile')}</h2>
      
      {!editMode ? (
        <div className="profile-info">
          <div className="info-item">
            <span>{t('name')}:</span>
            <strong>{profile.name}</strong>
          </div>
          <div className="info-item">
            <span>{t('email')}:</span>
            <strong>{profile.email}</strong>
          </div>
          <div className="info-item">
            <span>{t('phone')}:</span>
            <strong>{profile.phone}</strong>
          </div>
          <div className="info-item">
            <span>{t('address')}:</span>
            <strong>{profile.address}</strong>
          </div>
          
          <div className="actions">
            <button onClick={() => setEditMode(true)} className="btn-edit">
              {t('edit_profile')}
            </button>
            <button onClick={logout} className="btn-logout">
              {t('logout')}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>{t('name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t('email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t('phone')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t('address')}</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn-save">
              {t('save_changes')}
            </button>
            <button 
              type="button" 
              onClick={() => setEditMode(false)}
              className="btn-cancel"
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      )}
      
      <div className="account-settings">
        <h3>{t('account_settings')}</h3>
        <button className="btn-change-password">
          {t('change_password')}
        </button>
        <button className="btn-delete-account">
          {t('delete_account')}
        </button>
      </div>
    </div>
  );
};

export default Profile;