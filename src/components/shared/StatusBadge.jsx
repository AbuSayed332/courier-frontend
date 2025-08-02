import React from 'react';
import { useTranslation } from '../../context/LanguageContext';

const StatusBadge = ({ status, small = false }) => {
  const { t } = useTranslation();
  
  const getStatusColor = () => {
    switch (status) {
      case 'pending':
        return 'bg-gray-500';
      case 'processing':
        return 'bg-blue-500';
      case 'in_transit':
        return 'bg-yellow-500';
      case 'delivered':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const sizeClass = small ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm';
  
  return (
    <span className={`${getStatusColor()} ${sizeClass} rounded-full text-white`}>
      {t(status)}
    </span>
  );
};

export default StatusBadge;