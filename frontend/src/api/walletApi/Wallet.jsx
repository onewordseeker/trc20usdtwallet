import axios from 'utils/axios';
const serviceToken = window.localStorage.getItem('serviceToken');
const config = {
  headers: {
    Authorization: `Bearer ${serviceToken}`
  }
};
export const getBalances = async () => {
  const response = await axios.get('/api/get_balances', config);
  return response.data;
};

export const getWallets = async () => {
  const response = await axios.get('/api/get_wallets', config);
  return response.data;
};

export const getAdminWallet = async () => {
  const response = await axios.get('/api/get_admin_wallet', config);
  return response.data;
};

export const refreshBalance = async (wallet_address) => {
  const response = await axios.get('/api/refresh_balance?wallet_address=' + wallet_address, config);
  return response.data;
};

export const getTransactions = async (wallet_address) => {
  const response = await axios.get('/api/get_transactions?wallet_address=' + wallet_address, config);
  return response.data;
};

export const getAdminWalletTransactions = async () => {
  const response = await axios.get('/api/get_admin_wallet_transactions', config);
  return response.data;
};

export const addWallet = async (data) => {
  const response = await axios.post('/api/add_wallet', data, config);
  return response.data;
};

export const updateWallet = async (data) => {
  const response = await axios.post('/api/update_wallet', data, config);
  return response.data;
};

export const deleteWallet = async (data) => {
  const response = await axios.post('/api/delete_wallet', data, config);
  return response.data;
};

export const transfer = async (data) => {
  const response = await axios.post('/api/transfer', data, config);
  return response.data;
};

export const transferAdminWallet = async (data) => {
  const response = await axios.post('/api/transfer_admin', data, config);
  return response.data;
};