import React from 'react';

// Custom SVG Icons with enhanced styling
const GlobeAltIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ChatBubbleLeftRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const PhotoIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
  </svg>
);

const RocketIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

// Animated background elements
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
    <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
  </div>
);

const Footer = () => {
  const handleNavigation = (path) => {
    console.log('Navigate to:', path);
  };

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
    { to: '/customer', label: 'Customer Portal' },
  ];

  const socialLinks = [
    { href: '#', icon: GlobeAltIcon, label: 'Website', color: 'from-blue-500 to-blue-600' },
    { href: '#', icon: ChatBubbleLeftRightIcon, label: 'Twitter', color: 'from-sky-500 to-sky-600' },
    { href: '#', icon: PhotoIcon, label: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { href: '#', icon: BriefcaseIcon, label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <FloatingElements />
      
      {/* Main Footer Content */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section with Logo and CTA */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  CourierTrack
                </h2>
                <p className="text-sm text-white/60 -mt-1">Next-Gen Logistics</p>
              </div>
            </div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Experience the future of logistics with our cutting-edge tracking technology
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* About Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <RocketIcon className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  About Us
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                CourierTrack revolutionizes logistics with AI-powered tracking, real-time updates, and seamless delivery management for the modern world.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/60">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Global Coverage</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => handleNavigation(link.to)}
                    className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 group-hover:bg-blue-300 transition-all duration-300"></div>
                    <span className="font-medium">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-4 text-white/70">
                <div className="group hover:text-white transition-colors duration-300">
                  <p className="font-semibold text-white/90">Address</p>
                  <p>123 Innovation Drive</p>
                  <p>Tech City, TC 12345</p>
                </div>
                <div className="group hover:text-white transition-colors duration-300">
                  <p className="font-semibold text-white/90">Contact</p>
                  <p>info@courier-track.com</p>
                  <p>(555) 123-TRACK</p>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => console.log('Social link clicked:', social.label)}
                    className={`group relative p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg`}
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 mx-auto" />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <p className="text-xs text-white/60 group-hover:text-white/80 mt-2 transition-colors duration-300">
                      {social.label}
                    </p>
                  </button>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm text-white/80 mb-3">Stay updated with our latest features</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                <HeartIcon className="h-6 w-6 text-red-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Copyright & Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} CourierTrack. Crafted with{' '}
                <HeartIcon className="inline h-4 w-4 text-red-400 animate-pulse" />{' '}
                for the future of logistics
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <button 
                onClick={() => handleNavigation('/privacy')}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/cookies')}
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        title="Scroll to top"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;