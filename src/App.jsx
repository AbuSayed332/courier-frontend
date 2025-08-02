import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { SocketProvider } from './context/SocketContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import AdminLayout from './pages/AdminLayout.jsx';
import CustomerLayout from './pages/CustomerLayout.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/shared/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <SocketProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route 
                    path="/admin/*" 
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <AdminLayout />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/customer/*" 
                    element={
                      <ProtectedRoute allowedRoles={['customer']}>
                        <CustomerLayout />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </SocketProvider>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;