import { useOutletContext } from 'react-router';
import { useState, useEffect } from 'react';
// material-ui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project-imports
import MainCard from 'components/MainCard';
import { openSnackbar } from 'api/snackbar';
import useAuth from 'hooks/useAuth';
import { updateProfile } from 'api/walletApi/Users';

function useInputRef() {
  return useOutletContext();
}

// ==============================|| USER PROFILE - PERSONAL ||============================== //

export default function TabPersonal() {
  const { logout, user } = useAuth();

  useEffect(() => {
    console.log(JSON.parse(user?.permissions));
  }, []);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const inputRef = useInputRef();
  const [permissionOptions, setPermissionOptions] = useState([
    'Transfer All funds',
    'Transfer one by one',
    'Wallets Management',
    'Users Management',
    'Transactions',
    'Activity Logs'
  ]);
  return (
    <MainCard content={false} title="Personal Information" sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
      <Formik
        initialValues={{
          fullname: user?.fullname,
          email: user?.email,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().max(255).required('Full Name is required.'),
          email: Yup.string().email('Invalid email address.').max(255).required('Email is required.'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            let data = { fullname: values.fullname, email: values.email };
            await updateProfile(data);
            openSnackbar({
              open: true,
              message: 'Personal profile updated successfully.',
              variant: 'alert',
              alert: { color: 'success' }
            });
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            openSnackbar({
              open: true,
              message: err.message,
              variant: 'alert',
              alert: { color: 'error' }
            });
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, setFieldValue, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="personal-first-name">Full Name</InputLabel>
                    <TextField
                      fullWidth
                      id="personal-first-name"
                      value={values.fullname}
                      name="fullname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Full Name"
                      autoFocus
                      inputRef={inputRef}
                    />
                  </Stack>
                  {touched.fullname && errors.fullname && (
                    <FormHelperText error id="personal-first-name-helper">
                      {errors.fullname}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="personal-email">Email Address</InputLabel>
                    <TextField
                      type="email"
                      fullWidth
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="personal-email"
                      placeholder="Email Address"
                    />
                  </Stack>

                  {touched.email && errors.email && (
                    <FormHelperText error id="personal-email-helper">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box spacing={1}>
                    <InputLabel htmlFor="personal-email">Permissions</InputLabel>
                    {permissionOptions.map((permission, index) => {
                      if (JSON.parse(user?.permissions)[index] == '1') {
                        return (
                          <Chip
                            key={permission}
                            label={permission}
                            sx={{ fontSize: '9px', margin: '5px' }}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        );
                      }
                    })}
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 2.5 }}>
              {touched.note && errors.note && (
                <FormHelperText error id="personal-note-helper">
                  {errors.note}
                </FormHelperText>
              )}
              <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 2.5 }}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
                <Button disabled={isSubmitting || Object.keys(errors).length !== 0} type="submit" variant="contained">
                  Save
                </Button>
              </Stack>
            </Box>
          </form>
        )}
      </Formik>
    </MainCard>
  );
}
