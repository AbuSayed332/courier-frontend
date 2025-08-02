import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  User, 
  Truck, 
  Settings, 
  LogIn, 
  LogOut, 
  Package,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">CourierTrack</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              <Link
                to="/"
                className="bg-white/20 text-white px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              
              {user && user.role === 'customer' && (
                <Link
                  to="/customer"
                  className="text-white/80 hover:text-white hover:bg-white/20 px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium transition-all duration-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  Customer
                </Link>
              )}
              
              {user && user.role === 'agent' && (
                <Link
                  to="/agent"
                  className="text-white/80 hover:text-white hover:bg-white/20 px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium transition-all duration-200"
                >
                  <Truck className="h-4 w-4 mr-2" />
                  Agent
                </Link>
              )}
              
              {user && user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="text-white/80 hover:text-white hover:bg-white/20 px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium transition-all duration-200"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {user && (
              <div className="text-white/90 text-sm">
                Welcome, <span className="font-semibold">{user.name || user.email}</span>
              </div>
            )}
            
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-red-500/80 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-green-500/80 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg p-2 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-black/10 backdrop-blur-sm rounded-b-lg mt-2">
              <Link
                to="/"
                className="bg-white/20 text-white  px-3 py-2 rounded-md text-base font-medium hover:bg-white/30 transition-all duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 mr-3" />
                Home
              </Link>
              
              {user && user.role === 'customer' && (
                <Link
                  to="/customer"
                  className="text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-3" />
                  Customer
                </Link>
              )}
              
              {user && user.role === 'agent' && (
                <Link
                  to="/agent"
                  className="text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Truck className="h-5 w-5 mr-3" />
                  Agent
                </Link>
              )}
              
              {user && user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="text-white/80 hover:text-white hover:bg-white/20  px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Admin
                </Link>
              )}

              <div className="border-t border-white/20 pt-2">
                {user ? (
                  <>
                    <div className="text-white/90 px-3 py-2 text-sm">
                      Welcome, <span className="font-semibold">{user.name || user.email}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left flex items-center px-3 py-2 text-base font-medium rounded-md text-white bg-red-500/80 hover:bg-red-500 transition-all duration-200"
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center px-3 py-2 text-base font-medium rounded-md text-white bg-green-500/80 hover:bg-green-500 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-3" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;