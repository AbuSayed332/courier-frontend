import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../context/LanguageContext';
import { Eye, EyeOff, User, Mail, Phone, MapPin, Lock, UserPlus, ArrowRight } from 'lucide-react';

const Register = () => {
  const { t } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (userData.password !== userData.confirmPassword) {
      setError(t('passwords_dont_match'));
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      await register(userData);
      navigate('/customer/tracking');
    } catch (err) {
      setError(err.response?.data?.message || t('registration_failed'));
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: 'name', type: 'text', icon: User, label: t('name') },
    { name: 'email', type: 'email', icon: Mail, label: t('email') },
    { name: 'phone', type: 'tel', icon: Phone, label: t('phone') },
    { name: 'address', type: 'text', icon: MapPin, label: t('address') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Glass morphism container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{t('register')}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-2"></div>
            <p className="text-white/70 text-sm">Join us and start your journey today</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200 text-sm backdrop-blur-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Regular input fields */}
            {inputFields.map((field) => {
              const Icon = field.icon;
              const isFocused = focusedField === field.name;
              const hasValue = userData[field.name].length > 0;
              
              return (
                <div key={field.name} className="space-y-1">
                  <label className="block text-white/90 text-xs font-medium">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Icon className={`w-5 h-5 transition-colors duration-200 ${
                        isFocused || hasValue ? 'text-purple-400' : 'text-white/50'
                      }`} />
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={userData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                    />
                  </div>
                </div>
              );
            })}

            {/* Password field */}
            <div className="space-y-1">
              <label className="block text-white/90 text-xs font-medium">
                {t('password')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Lock className={`w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'password' || userData.password.length > 0 ? 'text-purple-400' : 'text-white/50'
                  }`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  required
                  minLength="6"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-purple-400 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="space-y-1">
              <label className="block text-white/90 text-xs font-medium">
                {t('confirm_password')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Lock className={`w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'confirmPassword' || userData.confirmPassword.length > 0 ? 'text-purple-400' : 'text-white/50'
                  }`} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Confirm your password"
                  required
                  minLength="6"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-purple-400 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-70 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-center justify-center space-x-2">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <span>{t('registering')}...</span>
                  </>
                ) : (
                  <>
                    <span>{t('register')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              {t('already_have_account')}{' '}
              <Link 
                to="/login" 
                className="text-purple-300 hover:text-purple-200 font-semibold transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
              >
                {t('login_here')}
              </Link>
            </p>
          </div>

          {/* Terms notice */}
          <div className="text-center mt-6 text-white/50 text-xs">
            <p>By creating an account, you agree to our Terms & Privacy Policy</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;