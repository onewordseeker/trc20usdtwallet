import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Wallet2, Wallet3, Edit2 } from 'iconsax-react';
import DestinationWallets from 'components/DestinationWallets';
import ManagedWallets from 'components/ManagedWallets';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
// project-imports
import MainCard from 'components/MainCard';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';
import { Add, WalletCheck } from 'iconsax-react';
import { getWallets, addWallet } from 'api/walletApi/Wallet';

const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function Wallets({ layout = SimpleLayoutType.SIMPLE }) {
  const [addWalletModal, setAddWalletModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [walletName, setWalletName] = useState('');
  const [wallets, setWallets] = useState([]);
  const [rows, setRows] = useState([]);
  const [rows2, setRows2] = useState([]);
  const [loading, setLoading] = useState([]);
  const [changeHandle, setChangeHandle] = useState([]);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState('');
  const typeLabel = ['Destination', 'Managed'];
  const handleCloseErrorModal = () => {
    setErrorModal(false);
  };
  const handleClose = () => {
    setAddWalletModal(false);
    setWalletAddress('');
  };
  const handleCloseConfirm = () => {
    setConfirmModal(false);
  };
  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
  };
  const handleSaveWallet = () => {
    setConfirmModal(true);
  };

  const getAllWallets = async () => {
    setLoading(true);
    const response = await getWallets();
    setWallets([]);
    setRows([]);
    setRows2([]);
    setLoading(false);
    setWallets(response.wallets);
    response.wallets.map((wallet) => {
      if (wallet.supply_wallet) {
        const row = createData(
          wallet.id,
          wallet.wallet_name,
          wallet.wallet_address,
          wallet.partner,
          wallet.last_balance,
          wallet.trx_balance,
          ''
        );
        setRows2((prevRows) => [...prevRows, row]);
      } else {
        const row = createData(
          wallet.id,
          wallet.wallet_name,
          wallet.wallet_address,
          wallet.partner,
          wallet.last_balance,
          wallet.trx_balance,
          ''
        );
        setRows((prevRows) => [...prevRows, row]);
      }
    });
  };
  function createData(id, name, wallet_address, partner, last_balance, trx_balance) {
    return {
      id,
      name,
      wallet_address,
      partner,
      last_balance,
      trx_balance,
      history: []
    };
  }
  useEffect(() => {
    getAllWallets();
  }, [changeHandle]);

  const handleConfirmModal = async () => {
    try {
      if (walletAddress && value) {
        setErrorModal(true);
        setError('Wallet already created.');
        return;
      }
      setLoading(true);
      const data = { wallet_name: walletName, supply_wallet: value };
      if (!value) {
        data.wallet_address = walletAddress;
      }
      const response = await addWallet(data);
      setLoading(false);
      if (response.message == 'success') {
        setSuccessModal(true);
        setWalletAddress(response.wallet.wallet_address);
        handleCloseConfirm();
        handleClose();
        const rndm = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
        setChangeHandle(rndm);
      } else {
        setErrorModal(true);
        setConfirmModal(false);
        setError(response.message);
      }
    } catch (error) {
      setLoading(false);
      setErrorModal(true);
      setConfirmModal(false);
      setError(error.message);
    }
  };

  function TabPanel({ children, value, index, ...other }) {
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
      </div>
    );
  }
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `profile-tab-${index}`,
      'aria-controls': `profile-tabpanel-${index}`
    };
  }
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      <Grid container spacing={2} sx={{ flexDirection: 'row-reverse', display: 'flex' }}>
        <Grid item xs={12} md={3} lg={3} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mb: 1 }} onClick={() => setAddWalletModal(true)} variant="contained" startIcon={<Add />} size="large">
            Add {typeLabel[value]} Wallet
          </Button>
        </Grid>
        <Grid item lg={9} xs={12} md={9} sm={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ justifyContent: 'space-between', display: 'flex' }}
            aria-label="basic tabs example"
          >
            <Tab sx={{ width: '50%' }} label="Destination Wallets" icon={<Wallet2 />} iconPosition="start" {...a11yProps(0)} />
            <Tab sx={{ width: '50%' }} label="Managed Wallets" icon={<Wallet3 />} iconPosition="start" {...a11yProps(1)} />
          </Tabs>
        </Grid>
      </Grid>
      <TabPanel value={value} index={0}>
        <Box>
          <Grid item xs={12}>
            <Loader loading={loading} />
            <DestinationWallets setChangeHandle={setChangeHandle} rows={rows} />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Grid item xs={12}>
            <Loader loading={loading} />
            <ManagedWallets setChangeHandle={setChangeHandle} rows={rows2} />
          </Grid>
        </Box>
      </TabPanel>
      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={addWalletModal}
        fullWidth
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={addWalletModal}>
          <MainCard title={'Add ' + typeLabel[value] + ' Wallet'} modal darkTitle content={false}>
            <Loader loading={loading} />
            <CardContent>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Wallet Name</InputLabel>
                  <TextField
                    type="text"
                    fullWidth
                    value={walletName}
                    onChange={(text) => setWalletName(text.target.value)}
                    placeholder="Enter Wallet Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Edit2 />
                        </InputAdornment>
                      )
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Wallet Address</InputLabel>
                  <TextField
                    type="text"
                    fullWidth
                    disabled={value}
                    value={walletAddress}
                    onChange={(text) => setWalletAddress(text.target.value)}
                    placeholder="Enter Wallet Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Wallet2 />
                        </InputAdornment>
                      )
                    }}
                  />
                </Stack>
              </Grid>
              <Typography sx={{ opacity: 0 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non c
              </Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
              <Button color="error" size="small" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleSaveWallet} startIcon={<WalletCheck />} variant="contained" size="small">
                <Typography sx={{ marginLeft: '5px' }}>Save</Typography>
              </Button>
            </Stack>
          </MainCard>
        </Fade>
      </Modal>
      <Modal
        open={confirmModal}
        onClose={handleCloseConfirm}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Confirm?" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">Are you sure you want to add this wallet as {typeLabel[value]} wallet?</Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseConfirm}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleConfirmModal} size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      <Modal
        open={successModal}
        onClose={handleCloseSuccessModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Great!" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">Operation was successfull.</Typography>
          </CardContent>
        </MainCard>
      </Modal>
      <Modal
        open={errorModal}
        onClose={handleCloseErrorModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Sorry!" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description" color="error">
              Operation failed with error: {error}.
            </Typography>
          </CardContent>
        </MainCard>
      </Modal>
      {/* <FooterBlock isFull={layout === SimpleLayoutType.LANDING} /> */}
    </Suspense>
  );
}

Wallets.propTypes = { layout: PropTypes.any };
