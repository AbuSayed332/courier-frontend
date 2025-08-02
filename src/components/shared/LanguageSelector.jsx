import React from 'react';
import { useTranslation } from '../../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation();
  
  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  
  return (
    <select 
      value={language} 
      onChange={changeLanguage}
      className="language-selector"
    >
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
    </select>
  );
};

export default LanguageSelector;