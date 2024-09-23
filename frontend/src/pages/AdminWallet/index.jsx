import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from 'components/@extended/Avatar';
import { Suspense } from 'react';
import FilteringTable from 'components/filtering';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import SyntaxHighlight from 'utils/SyntaxHighlight';

import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
// project-imports
import MainCard from 'components/MainCard';
import defaultImages from 'assets/images/users/default.png';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import QRCode from 'qrcode.react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
// project import
import Loader from 'components/Loader';
import { getAdminWallet, getAdminWalletTransactions, getWallets, transferAdminWallet } from 'api/walletApi/Wallet';
import { ArrowSwapHorizontal, DollarCircle } from 'iconsax-react';

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function AdminWallet() {
  const [confirmModal, setConfirmModal] = useState(false);
  const [wallet, setWallet] = useState([]);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [txns, setTxns] = useState([]);
  const [names, setNames] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openSendingProgressModal, setOpenSendingProgressModal] = useState(false);
  const [LogsString, setLogsString] = useState('');
  const [qrCodeUrl, walletAddressUrl] = useState('');
  const [transferProgress, setTransferProgress] = useState(0);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 } } };

  const handleCloseConfirm = () => {
    setConfirmModal(false);
  };
  const handleOpenConfirm = () => {
    setConfirmModal(true);
  };

  const _getAdminWallet = async () => {
    setLoading(true);
    const response = await getAdminWallet();
    const wallets = await getWallets();
    const _txns = await getAdminWalletTransactions();
    setLoading(false);
    setTxns(_txns.data);
    setWallet(response.wallet);
    if (response.status_code == '200') {
      wallets.wallets
        .filter((r) => r.supply_wallet == 0)
        .forEach((row) => {
          setNames((prevRows) => [...prevRows, { id: row.id, wallet_name: row.wallet_name, wallet_address: row.wallet_address }]);
        });
      let __txns = [];
      console.log(1);
      for (let i = 0; i < _txns.data.length; i++) {
        const txn = _txns.data[i];
        __txns.push({
          timestamp: txn.timeStamp,
          hash: txn?.hash.slice(0, 10) + '...' + txn?.hash.slice(54, 64),
          sent: wallet?.wallet_address == txn.from ? 1 : 0,
          amount: Number(txn.value)?.toFixed(2) + txn.type,
          to: txn?.to.slice(0, 8) + '...' + txn?.to.slice(26, 34),
          from: txn?.from.slice(0, 8) + '...' + txn?.from.slice(26, 34),
          status: txn.status.toLowerCase(),
          txn_link: txn.link,
          currency: txn.type
        });
      }
      __txns.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setTransactions(__txns);
    }
  };
  useEffect(() => {
    _getAdminWallet();
  }, []);

  const handleChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleTransfer = async () => {
    setLogsString('');
    setOpenSendingProgressModal(true);
    try {
      const data = {
        to: walletAddress,
        amount: amount
      };

      try {
        const response = await transferAdminWallet(data);
        const _amount = '$' + amount;
        if (response?.hash) {
          const hash = response.hash;
          const _log = `Details\n      Status: 'Transfer initiated'\n       To wallet: ${walletAddress}\n       Amount: ${_amount}\n       From: Admin Wallet\n       Hash: ${hash}\n`;
          setLogsString((prevLogs) => prevLogs + _log);
        } else {
          const _log = `Details\n       Status: 'Transfer failed'\n       To wallet: ${walletAddress}\n       Amount: ${_amount}\n       From: Admin Wallet\n       Error: ${response.message}\n`;
          setLogsString((prevLogs) => prevLogs + _log);
        }
        const progress = (100 / 1) * 1;
        setTransferProgress(progress);
      } catch (error) {
        const _log = `Details\n       Status: 'Transfer failed'\n       To wallet: ${walletAddress}\n       Error: ${error.message}\n`;
        setLogsString((prevLogs) => prevLogs + _log);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseSendingProgressModal = () => {
    setOpenSendingProgressModal(false);
    handleCloseConfirm();
    handleCloseConfirm();
    setLogsString('');
  };

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      <Box>
        <Grid item xs={12}>
          {loading && <Loader />}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MainCard>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Stack direction="row" justifyContent="flex-end">
                          <Chip label="Pro" size="small" color="primary" />
                        </Stack>
                        <Stack spacing={2.5} alignItems="center">
                          <QRCode value={wallet?.wallet_address} renderAs="canvas" />,
                          <Stack spacing={0.5} alignItems="center">
                            <Typography variant="h5">Admin Wallet</Typography>
                            <Typography color="secondary">{wallet?.wallet_address}</Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-around" alignItems="center">
                          <Stack spacing={0.5} alignItems="center">
                            <Typography variant="h5">{Number(wallet?.usdt_balance)?.toFixed(2)} USDT</Typography>
                            <Typography color="secondary">Balance</Typography>
                          </Stack>
                          <Divider orientation="vertical" flexItem />
                          <Stack spacing={0.5} alignItems="center">
                            <Typography variant="h5">{Number(wallet?.trx_balance)?.toFixed(2)} TRX</Typography>
                            <Typography color="secondary">Balance</Typography>
                          </Stack>
                          <Divider orientation="vertical" flexItem />
                          <Stack spacing={0.5} alignItems="center">
                            <Typography variant="h5">{txns.length}</Typography>
                            <Typography color="secondary">Total TXN</Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MainCard title="Transfer Funds">
                    <Grid item xs={12} lg={12}>
                      <Stack spacing={1}>
                        <InputLabel>To</InputLabel>
                        <FormControl>
                          <InputLabel id="demo-multiple-checkbox-label">Select Wallet</InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            fullWidth
                            value={walletAddress}
                            onChange={handleChange}
                            input={<OutlinedInput placeholder="Select Wallet" />}
                            renderValue={(selected) => selected}
                            MenuProps={MenuProps}
                          >
                            {names.map((row) => (
                              <MenuItem key={row.id} value={row.wallet_address}>
                                <Checkbox checked={walletAddress == row.wallet_address ? true : false} />
                                <ListItemText
                                  primary={
                                    row.wallet_name +
                                    ' (' +
                                    row?.wallet_address?.slice(0, 10) +
                                    '...' +
                                    row?.wallet_address?.slice(25, 34) +
                                    ')'
                                  }
                                />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                    </Grid>

                    <Grid item xs={12} lg={12} mt={2}>
                      <Stack spacing={1}>
                        <InputLabel>USDT Amount</InputLabel>
                        <TextField
                          type="number"
                          fullWidth
                          value={amount}
                          onChange={(text) => setAmount(text.target.value)}
                          inputProps={{ min: 0 }}
                          placeholder="Enter Amount"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <DollarCircle />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                      <Button onClick={handleOpenConfirm} variant="contained" size="small">
                        <ArrowSwapHorizontal /> <Typography sx={{ marginLeft: '5px' }}>Transfer</Typography>
                      </Button>
                    </Stack>
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MainCard title="About me">
                    {loading && <LinearProgress color="primary" sx={{ height: 2 }} />}
                    <FilteringTable data={transactions} />
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={confirmModal}
        onClose={handleCloseConfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Confirm Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">
              Are you sure you want to transfer {'$' + amount} to {walletAddress}?
            </Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseConfirm}>
              Cancel
            </Button>
            <Button onClick={handleTransfer} variant="contained" size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      <Modal
        open={openSendingProgressModal}
        onClose={handleCloseSendingProgressModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Transfering Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">
              <LinearWithLabel variant="determinate" value={transferProgress} />
            </Typography>
            <SyntaxHighlight>{LogsString}</SyntaxHighlight>
            <Typography sx={{ opacity: 0 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non c
            </Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseSendingProgressModal}>
              Close
            </Button>
          </Stack>
        </MainCard>
      </Modal>
    </Suspense>
  );
}

AdminWallet.propTypes = { layout: PropTypes.any };
