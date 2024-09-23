import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useAuth from 'hooks/useAuth';
import FormHelperText from '@mui/material/FormHelperText';

// third-party
import OtpInput from 'react18-input-otp';

// project-imports
import AnimateButton from 'components/@extended/AnimateButton';
import { ThemeMode } from 'config';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

export default function AuthCodeVerification({ email, password }) {
  const theme = useTheme();
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const bc = theme.palette.mode === ThemeMode.DARK ? theme.palette.secondary[200] : theme.palette.secondary.light;
  const [borderColor, setBorderColor] = useState(bc);

  const handleLogin = async () => {
    const _message = await login(email, password, otp);
    if (_message) {
      setMessage(_message);
      setBorderColor(theme.palette.error.light)
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          containerStyle={{ justifyContent: 'space-between' }}
          inputStyle={{
            width: '100%',
            margin: '8px',
            padding: '10px',
            border: '1px solid',
            borderColor: borderColor ,
            borderRadius: 4,
            ':hover': { borderColor: theme.palette.primary.main }
          }}
          focusStyle={{
            outline: 'none',
            boxShadow: theme.customShadows.primary,
            border: '1px solid',
            borderColor: theme.palette.primary.main
          }}
        />
        {message ? (
          <FormHelperText error id="standard-weight-helper-text-email-login">
            {message}
          </FormHelperText>
        ) : null}
      </Grid>
      <Grid item xs={12}>
        <AnimateButton>
          <Button disableElevation onClick={handleLogin} fullWidth size="large" type="submit" variant="contained">
            Continue
          </Button>
        </AnimateButton>
      </Grid>
    </Grid>
  );
}
