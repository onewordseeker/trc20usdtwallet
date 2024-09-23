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
import Switch from '@mui/material/Switch';
import Loader from 'components/Loader';

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
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { updateUser, deleteUser } from 'api/walletApi/Users';

// assets
import { ArrowDown2, ArrowUp2, Edit2, Trash, Global, Sms, WalletCheck } from 'iconsax-react';
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
function createData(name, wallet_address, id) {
  return {
    name,
    wallet_address,
    id,
    history: [
      { date: '2020-01-05', wallet_address: '11091700', balance: 3, link: 'pending' },
      { date: '2022-01-05', wallet_address: '3423l234', balance: 9, link: 'success' },
      { date: '2023-04-05', wallet_address: '32424234', balance: 93, link: 'failed' }
    ]
  };
}

function Row({ row, setSuccessModal, setChangeHandle }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('edit');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteWalletModal, setDeleteUserModal] = useState(false);
  const [permission, setPermission] = useState([]);
  const [active, setActive] = useState(1);
  const [editModal, setEditModal] = useState(false);
  const [deletingWalletId, setDeletingUserId] = useState('');
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [permissionOptions, setPermissionOptions] = useState([
    'Transfer All funds',
    'Transfer one by one',
    'Wallets Management',
    'Users Management',
    'Transactions',
    'Activity Logs'
  ]);
  const handleCloseDeleteWalletModal = () => {
    setDeleteUserModal(false);
  };
  const handleCloseErrorModal = () => {
    setErrorModal(false);
  };
  const handleCloseConfirmModal = () => {
    setConfirmModal(false);
  };
  const handlDeleteSubmit = async () => {
    const response = await deleteUser({ user_id: row.id });
    if (response.status_code == '200') {
      handleCloseDeleteWalletModal();
      setSuccessModal(true);
      const rndm = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
      setChangeHandle(rndm);
    } else {
      setErrorModal(true);
      setConfirmModal(false);
      setError(response.message);
    }
  };
  const handleDeleteWalletModal = () => {
    setDeletingUserId(row.id);
    setDeleteUserModal(true);
  };
  const backColor = alpha(theme.palette.primary.lighter, 0.1);
  const [imageSrc, setimageSrc] = useState();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    const _path = images[randomNumber];
    setimageSrc(_path);
  }, []);
  const handleEditWalletModal = (_row) => {
    setEditModal(true);
    console.log(_row.permissions);
    setFullname(_row.name);
    setEmail(_row.email);
    let perms = [];
    _row.permissions.map((permission) => {
      if (permission.status == '1') perms.push(permission.label);
    });
    setPermission(perms);
    setActive(_row.active);
    setAction('update');
  };
  const handleEditWallet = () => {
    setConfirmModal(true);
  };

  const handleCloseEditModal = () => {
    setEditModal(false);
    setAction('add');
  };

  const handleChangePermission = (event) => {
    const {
      target: { value }
    } = event;
    setPermission(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleConfirmModal = async () => {
    try {
      setLoading(true);
      let _permissions = [];
      permissionOptions.map((perm, index) => {
        if (permission.indexOf(perm) != -1) {
          _permissions[index] = '1';
        } else {
          _permissions[index] = '0';
        }
      });
      const response = await updateUser({ user_id: row.id, fullname, email, password, permissions: JSON.stringify(_permissions), active });
      console.log(1);
      setLoading(false);
      if (response.message == 'success') {
        handleCloseConfirmModal();
        setSuccessModal(true);
        handleCloseEditModal();
        setFullname('');
        setEmail('');
        setPassword('');
        setPermission([]);
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

  const handleUserStatus = (event) => {
    console.log(event.target.checked ? 1 : 0);
    setActive(event.target.checked ? 1 : 0);
  };

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ pl: 3 }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <ArrowUp2 /> : <ArrowDown2 />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src={imageSrc} sx={{ width: '30px', height: '30px', mr: 1, borderRadius: 100 }} />
          <Typography> {row.name} </Typography>
        </TableCell>
        <TableCell sx={{ pr: 3 }}>{row.email}</TableCell>
        <TableCell sx={{ pr: 3, maxWidth: 250 }}>
          {row.permissions.map((permission) => {
            if (permission.status == '1') {
              return (
                <Chip
                  key={permission.label}
                  label={permission.label}
                  sx={{ fontSize: '9px' }}
                  size="small"
                  variant="outlined"
                  color="primary"
                />
              );
            }
          })}
        </TableCell>
        {row.active ? <Chip size="small" label="Active" color="success" /> : null}
        {!row.active ? <Chip size="small" label="Deactive" color="error" /> : null}
        <TableCell sx={{ pr: 3 }}>
          <IconButton aria-label="expand row" size="small" onClick={() => handleDeleteWalletModal()}>
            <Trash />
          </IconButton>
          <IconButton aria-label="expand row" size="small" onClick={() => handleEditWalletModal(row)}>
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
                          <TableCell>Name</TableCell>
                          <TableCell>Wallet Address</TableCell>
                          <TableCell>Last Updated Balance ($)</TableCell>
                          <TableCell>TRX Balance ($)</TableCell>
                          <TableCell>Explore</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.wallets?.map((historyRow) => (
                          <TableRow hover key={historyRow.date}>
                            <TableCell component="th" scope="row">
                              {historyRow.wallet_name}
                            </TableCell>
                            <TableCell>{historyRow.wallet_address}</TableCell>
                            <TableCell>
                              <Typography color={'success'}> {historyRow.last_balance} </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography color={'success'}> {historyRow.trx_balance} </Typography>
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
        fullWidth
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
          <MainCard title="Update User information" modal darkTitle content={false}>
            <Loader loading={loading} />
            <CardContent>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Full Name</InputLabel>
                  <TextField
                    type="text"
                    fullWidth
                    value={fullname}
                    onChange={(text) => setFullname(text.target.value)}
                    placeholder="Enter Full Name"
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
                  <InputLabel>Email</InputLabel>
                  <TextField
                    type="text"
                    fullWidth
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                    placeholder="Enter Email Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Sms />
                        </InputAdornment>
                      )
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Password</InputLabel>
                  <TextField
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                    placeholder="Enter Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Sms />
                        </InputAdornment>
                      )
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Permissions</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={permission}
                    onChange={handleChangePermission}
                    input={<OutlinedInput placeholder="Permissions" />}
                    renderValue={(selected) => selected.join(', ').slice(0, 70)}
                  >
                    {permissionOptions.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={permission.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Active</InputLabel>
                  <Switch onChange={handleUserStatus} defaultChecked={active} color="success" />
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
            <Typography id="modal-modal-description">Are you sure you want to {action} this user?</Typography>
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

export default function UsersTable({ rows, setChangeHandle }) {
  const [successModal, setSuccessModal] = useState(false);
  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
  };

  return (
    <MainCard
      content={false}
      title="Manage Users"
      secondary={<CSVExport data={rows} headers={header} filename={'collapsible-table-data.csv'} />}
    >
      {/* table */}
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }} />
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row setChangeHandle={setChangeHandle} setSuccessModal={setSuccessModal} key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </MainCard>
  );
}

Row.propTypes = { row: PropTypes.any };
