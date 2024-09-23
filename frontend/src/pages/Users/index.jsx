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
import { Sms, Edit2, PasswordCheck } from 'iconsax-react';
import UsersTable from 'components/users';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
// project-imports
import MainCard from 'components/MainCard';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';
import { Add, WalletCheck } from 'iconsax-react';
import { getUsers, addUser } from 'api/walletApi/Users';

const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function Users({ layout = SimpleLayoutType.SIMPLE }) {
  const [addUserModal, setAddUserModal] = useState(false);
  const [fullname, setFullname] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [permission, setPermission] = useState([]);
  const [users, setUsers] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState([]);
  const [changeHandle, setChangeHandle] = useState([]);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState('');
  const [permissionOptions, setPermissionOptions] = useState([
    'Transfer All funds',
    'Transfer one by one',
    'Wallets Management',
    'Users Management',
    'Transactions',
    'Activity Logs'
  ]);
  const handleCloseErrorModal = () => {
    setErrorModal(false);
  };
  const handleClose = () => {
    setAddUserModal(false);
    setFullname('');
  };
  const handleCloseConfirm = () => {
    setConfirmModal(false);
  };
  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
  };
  const handleSaveUser = () => {
    setConfirmModal(true);
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
  const getAllUsers = async () => {
    setLoading(true);
    const response = await getUsers();
    setUsers([]);
    setRows([]);
    setLoading(false);
    setUsers(response.users);
    response.users.map((user) => {
      const _permissions = JSON.parse(user.permissions);
      let permissionsArray = [];
      _permissions.map((_permission, index) => {
        permissionsArray.push({ label: permissionOptions[index], status: _permission });
      });
      const row = createData(user.id, user.fullname, user.email, permissionsArray, user.active, user.wallets);
      setRows((prevRows) => [...prevRows, row]);
    });
  };
  function createData(id, fullname, email, permissions, active, wallets) {
    return {
      id,
      name: fullname,
      email,
      permissions,
      active,
      wallets
    };
  }
  useEffect(() => {
    getAllUsers();
  }, [changeHandle]);

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
      const response = await addUser({ fullname, email, password, permissions: JSON.stringify(_permissions) });
      setLoading(false);
      if (response.message == 'success') {
        handleCloseConfirm();
        setSuccessModal(true);
        handleClose();
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
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      <Grid>
        <Button sx={{ mb: 1 }} onClick={() => setAddUserModal(true)} variant="contained" startIcon={<Add />} size="large">
          Add User
        </Button>
      </Grid>
      <Box>
        <Grid item xs={12}>
          <Loader loading={loading} />
          <UsersTable setChangeHandle={setChangeHandle} rows={rows} />
        </Grid>
      </Box>

      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={addUserModal}
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
        <Fade in={addUserModal}>
          <MainCard title="Add User" modal darkTitle content={false}>
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
                    placeholder="Enter Email"
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
                          <PasswordCheck />
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
              <Typography sx={{ opacity: 0 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non c
              </Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
              <Button color="error" size="small" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleSaveUser} startIcon={<WalletCheck />} variant="contained" size="small">
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
        <MainCard title="Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">Are you sure you want to add {fullname} with these permissions?</Typography>
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

Users.propTypes = { layout: PropTypes.any };
