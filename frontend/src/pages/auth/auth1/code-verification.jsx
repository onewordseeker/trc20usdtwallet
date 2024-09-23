// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ================================|| CODE VERIFICATION ||================================ //

export default function CodeVerification() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography variant="h3">Enter Authenticator Code</Typography>
            <Typography color="secondary">Use your Authenticator app to get the latest code</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthCodeVerification email={email} password={password} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
