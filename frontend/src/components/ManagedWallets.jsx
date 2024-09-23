import PropTypes from 'prop-types';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import CardContent from '@mui/material/CardContent';
// project-imports
import { header } from 'pages/tables/mui-table/basic';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { CSVExport } from 'components/third-party/react-table';
import Fade from '@mui/material/Fade';
import Loader from './Loader';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import { updateWallet, deleteWallet, getTransactions } from 'api/walletApi/Wallet';
import LinearProgress from '@mui/material/LinearProgress';

// assets
import { ArrowDown2, ArrowUp2, Edit2, Trash, Global, Wallet2, WalletCheck } from 'iconsax-react';
import img1 from '../assets/images/icons/1.png';
import img2 from '../assets/images/icons/2.png';
import img3 from '../assets/images/icons/3.png';
import img4 from '../assets/images/icons/4.png';
import img5 from '../assets/images/icons/5.png';
import img6 from '../assets/images/icons/6.png';
import img7 from '../assets/images/icons/7.png';
import img8 from '../assets/images/icons/8.png';
import img9 from '../assets/images/icons/9.png';
import img10 from '../assets/images/icons/10.png';
import img11 from '../assets/images/icons/11.png';
import img12 from '../assets/images/icons/12.png';
import img13 from '../assets/images/icons/13.png';
import img14 from '../assets/images/icons/14.png';
import img15 from '../assets/images/icons/15.png';
import img16 from '../assets/images/icons/16.png';
import img17 from '../assets/images/icons/17.png';
import img18 from '../assets/images/icons/18.png';
import img19 from '../assets/images/icons/19.png';
import img20 from '../assets/images/icons/20.png';
import img21 from '../assets/images/icons/21.png';
import img22 from '../assets/images/icons/22.png';
import img23 from '../assets/images/icons/23.png';
import img24 from '../assets/images/icons/24.png';
import img25 from '../assets/images/icons/25.png';

// Array to hold all imported images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25
];

function Row({ _row, setSuccessModal, setErrorModal, setError, setChangeHandle }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState(_row);
  const [action, setAction] = useState('add');
  const [walletName, setWalletName] = useState('');
  const [partner, setPartner] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteWalletModal, setDeleteWalletModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deletingWalletId, setDeletingWalletId] = useState('');
  const [loadingTxn, setLoadingTxn] = useState(true);

  const handleCloseDeleteWalletModal = () => {
    setDeleteWalletModal(false);
  };
  const handleCloseConfirmModal = () => {
    setConfirmModal(false);
  };
  const handlDeleteSubmit = async () => {
    try {
      setLoading(true);
      const response = await deleteWallet({ wallet_id: row.id });
      handleCloseDeleteWalletModal();
      setLoading(false);
      if (response.status_code == '200') {
        setConfirmModal(false);
        setEditModal(false);
        const rndm = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
        setChangeHandle(rndm);
        setTimeout(() => {
          setSuccessModal(true);
        }, 800);
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
  const handleDeleteWalletModal = () => {
    setDeletingWalletId(row.id);
    setDeleteWalletModal(true);
  };
  const backColor = alpha(theme.palette.primary.lighter, 0.1);
  const [imageSrc, setimageSrc] = useState();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    const _path = images[randomNumber];
    setimageSrc(_path);
  }, []);
  const handleEditWalletModal = () => {
    setEditModal(true);
    setWalletName(row.name);
    setPartner(row.partner);
    setWalletAddress(row.wallet_address);
    setAction('update');
  };
  const handleEditWallet = () => {
    setConfirmModal(true);
  };

  const handleCloseEditModal = () => {
    setEditModal(false);
    setAction('add');
  };

  const handleConfirmModal = async () => {
    try {
      setLoading(true);
      const response = await updateWallet({ wallet_name: walletName, wallet_id: row.id, supply_wallet: 1, partner });
      setLoading(false);
      if (response.message == 'success') {
        setSuccessModal(true);
        setConfirmModal(false);
        setEditModal(false);
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

  const handleGetTransactions = async () => {
    try {
      if (open) {
        setOpen(!open);
        return;
      }
      setOpen(!open);
      setLoadingTxn(true);
      const response = await getTransactions(row?.wallet_address);
      setLoadingTxn(false);
      if (response.status_code == '200') {
        console.log(2);
        let txns = [];
        response.data.forEach((txn) => {
          if (txn.type == 'USDT') {
            txns.push({
              date: txn.timeStamp,
              hash: txn.hash,
              sent: row?.wallet_address == txn.from ? 1 : 0,
              amount: txn.value,
              status: txn.status,
              link: txn.link,
              currency: 'USDT'
            });
          } else if (txn.type == 'TRX') {
            txns.push({
              date: txn.timeStamp,
              hash: txn.hash,
              sent: row?.wallet_address == txn.from ? 1 : 0,
              amount: txn.value,
              status: txn.status,
              link: txn.link,
              currency: 'TRX'
            });
          }
        });
        row.history = txns;
        setRow(row);
        console.log(row, 'row');
      }
    } catch (error) {
      setLoadingTxn(false);
    }
  };

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ pl: 3 }}>
          <IconButton aria-label="expand row" size="small" onClick={handleGetTransactions}>
            {open ? <ArrowUp2 /> : <ArrowDown2 />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src={imageSrc} sx={{ width: '30px', height: '30px', mr: 1, borderRadius: 100 }} />
          <Typography> {row?.name} </Typography>
        </TableCell>
        <TableCell sx={{ pr: 3 }}>{row?.wallet_address}</TableCell>
        <TableCell sx={{ pr: 3 }}>{row?.last_balance}</TableCell>
        <TableCell sx={{ pr: 3 }}>{row?.trx_balance}</TableCell>
        <TableCell sx={{ pr: 3 }}>
          <IconButton aria-label="expand row" size="small" onClick={() => handleDeleteWalletModal()}>
            <Trash />
          </IconButton>
          <IconButton aria-label="expand row" size="small" onClick={() => handleEditWalletModal()}>
            <Edit2 />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ bgcolor: backColor, '&:hover': { bgcolor: `${backColor} !important` } }}>
        <TableCell sx={{ py: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open && (
              <Box sx={{ py: 3, pl: { xs: 3, sm: 5, md: 6, lg: 10, xl: 12 } }}>
                <TableContainer>
                  <MainCard content={false}>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Hash</TableCell>
                          <TableCell>Amount ($)</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Explore</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row?.history?.map((historyRow) => (
                          <TableRow hover key={historyRow.date}>
                            <TableCell component="th" scope="row">
                              {historyRow.date}
                            </TableCell>
                            <TableCell>{historyRow.hash.slice(0, 10) + '...' + historyRow.hash.slice(54, 64)}</TableCell>
                            <TableCell>
                              <Typography color={historyRow.sent ? 'error' : 'success'}>
                                {' '}
                                {historyRow.sent ? '-' : '+'}
                                {historyRow.amount}{' '}{historyRow.currency}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              {historyRow.status.toLowerCase() == 'success' && <Chip size="small" label="Completed" color="success" />}
                              {historyRow.status.toLowerCase() == 'failed' && <Chip size="small" label="Failed" color="error" />}
                              {historyRow.status.toLowerCase() == 'pending' && <Chip size="small" label="Pending" color="warning" />}
                            </TableCell>
                            <TableCell>
                              <IconButton aria-label="expand row" size="small" onClick={() => window.open(historyRow.link, '_blank')}>
                                <Global />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {loadingTxn && <LinearProgress color="primary" sx={{ height: 2 }} />}
                    {(!row?.history.length && !loadingTxn ) && <Typography sx={{ textAlign: 'center', padding: 3 }}>No transaction found</Typography>}
                  </MainCard>
                </TableContainer>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
      <Modal
        open={deleteWalletModal}
        onClose={handleCloseDeleteWalletModal}
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
        <MainCard title="Delete Wallet" modal darkTitle content={false}>
          <Loader loading={loading} />
          <CardContent>
            <Typography id="modal-modal-description">Are you sure you want to delete this wallet?</Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseDeleteWalletModal}>
              Cancel
            </Button>
            <Button variant="contained" size="small" onClick={handlDeleteSubmit}>
              Confirm
            </Button>
          </Stack>
        </MainCard>
      </Modal>

      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={editModal}
        
        onClose={handleCloseEditModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={editModal}>
          <MainCard title="Edit Managed Wallet" modal darkTitle content={false}>
            <Loader loading={loading} />
            <CardContent>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Wallet Name</InputLabel>
                  <TextField
                    type="text"
                    
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
                  <InputLabel>Parnet</InputLabel>
                  <TextField
                    type="text"
                    
                    value={partner}
                    onChange={(text) => setPartner(text.target.value)}
                    placeholder="Enter Partner"
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
                    
                    disabled
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
              <Button color="error" size="small" onClick={handleCloseEditModal}>
                Cancel
              </Button>
              <Button onClick={handleEditWallet} startIcon={<WalletCheck />} variant="contained" size="small">
                <Typography sx={{ marginLeft: '5px' }}>Save</Typography>
              </Button>
            </Stack>
          </MainCard>
        </Fade>
      </Modal>
      <Modal
        open={confirmModal}
        onClose={handleCloseConfirmModal}
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
        <MainCard title="Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">Are you sure you want to {action} this wallet as managed wallet?</Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseConfirmModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleConfirmModal} size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
    </>
  );
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6),
//   createData('Ice cream sandwich', 237, 9),
//   createData('Eclair', 262, 16),
//   createData('Cupcake', 305, 3),
//   createData('Gingerbread', 356, 16)
// ];

// ==============================|| MUI TABLE - COLLAPSIBLE ||============================== //

export default function ManagedWallets({ rows, setChangeHandle }) {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState('');
  const handleCloseErrorModal = () => {
    setErrorModal(false);
  };
  const handleSuccessModal = (flag = false) => {
    setSuccessModal(flag);
  };

  return (
    <MainCard
      content={false}
      title="Managed Wallets"
      secondary={<CSVExport data={rows} headers={header} filename={'collapsible-table-data.csv'} />}
    >
      {/* table */}
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }} />
              <TableCell>Wallet Name</TableCell>
              <TableCell>Wallet Address</TableCell>
              <TableCell>USDT Balance</TableCell>
              <TableCell>TRX Balance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                setChangeHandle={setChangeHandle}
                setSuccessModal={handleSuccessModal}
                setErrorModal={setErrorModal}
                setError={setError}
                key={row.name}
                _row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={successModal}
        onClose={handleSuccessModal}
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
    </MainCard>
  );
}

Row.propTypes = { row: PropTypes.any };
