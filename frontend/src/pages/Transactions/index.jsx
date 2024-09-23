import { useState } from 'react';
import PropTypes from 'prop-types';
import { lazy, Suspense, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FilteringTable from 'components/filtering';
import Autocomplete from '@mui/material/Autocomplete';
import LinearProgress from '@mui/material/LinearProgress';

import Grid from '@mui/material/Grid';
// project-imports
import { getWallets, getTransactions } from 'api/walletApi/Wallet';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function Wallets({ layout = SimpleLayoutType.SIMPLE }) {
  const [walletAddress, setWalletAddress] = useState('');
  const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [walletAddresses, setWalletAddresses] = useState([]);
  const [loadingTxn, setLoadingTxn] = useState(false);

  const getAllWallets = async () => {
    const response = await getWallets();
    setWallets(response.wallets);
    console.log(response.wallets, 'response.wallets');
    response.wallets.map((wallet) => {
      setWalletAddresses((prevWallet) => [...prevWallet, wallet.wallet_name + ' | ' + wallet.wallet_address]);
    });
    if (walletAddress) {
      getAllTransactions(walletAddress);
    }
  };

  useEffect(() => {
    getAllWallets();
  }, []);

  const getAllTransactions = async (walletAddress) => {
    try {
      setLoadingTxn(true);
      console.log(3);
      const response = await getTransactions(walletAddress);
      setLoadingTxn(false);
      if (response.status_code == '200') {
        let txns = [];
        console.log(1);
        for (let i = 0; i < response.data.length; i++) {
          const txn = response.data[i];
          if (txn.type == 'USDT') {
            txns.push({
              timestamp: txn.timeStamp,
              hash: txn.hash,
              sent: walletAddress == txn.from ? 1 : 0,
              amount: txn.value + 'USDT',
              to: txn.to,
              from: txn.from,
              status: txn.status.toLowerCase(),
              link: txn.link,
              currency: 'USDT'
            });
          } else if (txn.type == 'TRX') {
            txns.push({
              timestamp: txn.timeStamp,
              hash: txn?.hash,
              sent: walletAddress == txn?.from ? 1 : 0,
              amount: txn?.value + 'TRX',
              status: txn?.status.toLowerCase(),
              to: txn.to,
              from: txn.from,
              link: txn?.link,
              currency: 'TRX'
            });
          }
        }
        console.log(2);
        setTransactions(txns);
      }
    } catch (error) {
      setLoadingTxn(false);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <Autocomplete
        fullWidth
        sx={{ mb: 1 }}
        disablePortal
        id="basic-autocomplete-label"
        onChange={(event, newValue) => {
          const walletAddress = newValue.split(' | ')[1];
          setWalletAddress(walletAddress);
          getAllTransactions(walletAddress);
        }}
        options={walletAddresses}
        renderInput={(params) => <TextField {...params} label="Label" />}
      />
      <Box>
        <Grid item xs={12}>
          {loadingTxn && <LinearProgress color="primary" sx={{ height: 2 }} />}
          <FilteringTable data={transactions} />
        </Grid>
      </Box>
      {/* <FooterBlock isFull={layout === SimpleLayoutType.LANDING} /> */}
    </Suspense>
  );
}

Wallets.propTypes = { layout: PropTypes.any };
