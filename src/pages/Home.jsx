import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

// Enhanced SVG icons with better styling
const PackageIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const TruckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1V9H9m4 7h2.5a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0015.5 10H13v6z" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
    <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
    <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
    <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
  </div>
);

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FloatingElements />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-6 animate-pulse">
            ✨ Next-Gen Logistics Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 tracking-tight">
            Courier
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tracking System
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed font-light">
            Experience the future of parcel management with real-time tracking, 
            <span className="text-blue-300 font-medium"> AI-powered routing</span>, and 
            <span className="text-purple-300 font-medium"> seamless logistics</span>
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/60">Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/60">Happy Users</div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Customer Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <PackageIcon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                For Customers
              </h3>
              
              <p className="text-white/70 text-center mb-6 leading-relaxed">
                Book parcel pickups, track shipments in real-time, and access your complete delivery history with our intuitive platform.
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Real-time tracking
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Instant notifications
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Delivery history
                </div>
              </div>
              
              <div className="mt-8">
                {user ? (
                  user.role === 'customer' ? (
                    <Link
                      to="/customer"
                      className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Go to Dashboard →
                    </Link>
                  ) : (
                    <p className="text-sm text-white/50 text-center bg-white/5 rounded-lg py-2">
                      Logged in as {user.role}
                    </p>
                  )
                ) : (
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Register as Customer →
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TruckIcon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                For Delivery Agents
              </h3>
              
              <p className="text-white/70 text-center mb-6 leading-relaxed">
                Access assigned parcels, update delivery status, and get AI-optimized routes for maximum efficiency.
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Smart route optimization
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Mobile-first design
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Performance analytics
                </div>
              </div>
              
              <div className="mt-8">
                {user ? (
                  user.role === 'agent' ? (
                    <Link
                      to="/agent"
                      className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Go to Dashboard →
                    </Link>
                  ) : (
                    <p className="text-sm text-white/50 text-center bg-white/5 rounded-lg py-2">
                      Logged in as {user.role}
                    </p>
                  )
                ) : (
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Agent Login →
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Admin Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChartIcon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                For Administrators
              </h3>
              
              <p className="text-white/70 text-center mb-6 leading-relaxed">
                Manage users, assign delivery agents, and access comprehensive system analytics and insights.
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  Advanced analytics
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  User management
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                  System monitoring
                </div>
              </div>
              
              <div className="mt-8">
                {user ? (
                  user.role === 'admin' ? (
                    <Link
                      to="/admin"
                      className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Go to Dashboard →
                    </Link>
                  ) : (
                    <p className="text-sm text-white/50 text-center bg-white/5 rounded-lg py-2">
                      Logged in as {user.role}
                    </p>
                  )
                ) : (
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Admin Login →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-sm font-medium">Trusted by 10,000+ businesses worldwide</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;