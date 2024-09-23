import { useState, useEffect } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Switch from '@mui/material/Switch';
import { openSnackbar } from 'api/snackbar';

// project-imports
import MainCard from 'components/MainCard';

import useAuth from 'hooks/useAuth';
import QRCode from 'qrcode.react';
import { get2FAQRUrl, toggle2FA } from 'api/walletApi/Users';
// assets

// ==============================|| USER PROFILE - PASSWORD CHANGE ||============================== //

export default function Tab2fa() {
  const [code, setCode] = useState('');
  const { updateProfile, user } = useAuth();
  const [enable, setEnable] = useState(user?.twofa);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [secret, setSecret] = useState('');
  const [changed, setChanged] = useState(false);
  const [showQR, setShowQR] = useState(true);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    console.log(user);
    if (user?.twofa) {
      setEnable(1);
    } else {
      getQRUrl();
    }
  }, []);
  useEffect(() => {
    setShowQR(!showQR);
  }, [changed]);
  const getQRUrl = async () => {
    const url = await get2FAQRUrl();
    setSecret(url.secret);
    setQrCodeUrl(url.qrCodeUrl);
  };

  const handleSubmit = async () => {
    const response = await toggle2FA({ token: code, secret, enable });
    if (response.isValid) {
      let _user = user;
      _user.twofa = enable ? 1 : 0;
      console.log(_user);
      updateProfile(_user);
      setSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 500);
      openSnackbar({
        open: true,
        message: '2FA is ' + enable ? 'enabled' : 'disabled',
        variant: 'alert',
        alert: { color: 'success' }
      });
    } else {
      openSnackbar({
        open: true,
        message: 'Invalid or expired code',
        variant: 'alert',
        alert: { color: 'error' }
      });
    }
  };

  return (
    <MainCard title="Change Password">
      <Grid container spacing={3}>
        <Grid item container spacing={3} xs={12} sm={12}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} xs={12}>
              <Switch
                onChange={(event) => {
                  setChanged(!changed);
                  setEnable(event.target.checked ? 1 : 0);
                }}
                value={enable}
                defaultChecked={enable}
              />
              <InputLabel>{enable ? 'Enable' : 'Disable'} Two Factor Authentication</InputLabel>
            </Box>
            {!user?.twofa && changed ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3
                }}
              >
                <Box
                  sx={{
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'fit-content'
                  }}
                >
                  {!success && !user?.twofa && qrCodeUrl && (
                    <QRCode level="L" fgColor={'#3b82f6'} bgColor={'#fff'} size={256} value={qrCodeUrl} />
                  )}
                </Box>
              </Box>
            ) : null}
            {!success && changed ? (
              <Stack spacing={1}>
                <InputLabel htmlFor="code">Two Factor Authenticator Code</InputLabel>
                <OutlinedInput
                  placeholder="Authenticator Code"
                  id="code"
                  type="text"
                  value={code}
                  name="code"
                  onChange={(event) => setCode(event.target.value)}
                  autoComplete="code"
                />
              </Stack>
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {!success && changed ? (
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
              <Button disabled={!changed} onClick={handleSubmit} type="submit" variant="contained">
                Save
              </Button>
            </Stack>
          ) : null}
        </Grid>
      </Grid>
    </MainCard>
  );
}
