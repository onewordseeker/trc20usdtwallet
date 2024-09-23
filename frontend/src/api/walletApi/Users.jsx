import axios from 'utils/axios';
const serviceToken = window.localStorage.getItem('serviceToken');
const config = {
  headers: {
    Authorization: `Bearer ${serviceToken}`
  }
};

export const getUsers = async () => {
  const response = await axios.get('/api/get_users', config);
  return response.data;
};

export const addUser = async (data) => {
  const response = await axios.post('/api/add_user', data, config);
  return response.data;
};

export const updateUser = async (data) => {
  const response = await axios.post('/api/update_user', data, config);
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await axios.post('/api/update_profile', data, config);
  return response.data;
};

export const deleteUser = async (data) => {
  const response = await axios.post('/api/delete_user', data, config);
  return response.data;
};

export const getActivities = async () => {
  const response = await axios.get('/api/get_activities', config);
  return response.data;
};

export const get2FAQRUrl = async () => {
  const response = await axios.get('/api/2fa/generate-secret', config);
  return response.data;
};

export const verifyCode = async (token) => {
  const response = await axios.post('/api/2fa/verify-token', token, config);
  return response.data;
};

export const toggle2FA = async (enable) => {
  const response = await axios.post('/api/2fa/toggle2FA', enable, config);
  return response.data;
};
