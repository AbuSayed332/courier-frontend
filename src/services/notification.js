import api from './api';

export default {
  success(message) {
    // Display success notification in UI
    console.log('Success:', message);
    // Could use a notification library like react-toastify here
  },
  
  error(message) {
    // Display error notification in UI
    console.error('Error:', message);
  },
  
  async sendEmail(to, subject, text) {
    try {
      await api.post('/notifications/email', { to, subject, text });
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  },
  
  async sendSMS(to, message) {
    try {
      await api.post('/notifications/sms', { to, message });
    } catch (error) {
      console.error('Failed to send SMS:', error);
    }
  }
};