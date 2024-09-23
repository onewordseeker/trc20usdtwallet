import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';

// assets
import BackLeft from 'assets/images/profile/UserProfileBackLeft';
import BackRight from 'assets/images/profile/UserProfileBackRight';

// ==============================|| USER PROFILE - TOP CARD ||============================== //

export default function ProfileCard({ focusInput }) {
  const theme = useTheme();

  return (
    <MainCard
      border={false}
      content={false}
      sx={{ bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.700' : 'primary.lighter', position: 'relative' }}
    >
      <Box sx={{ position: 'absolute', bottom: '-7px', left: 0, zIndex: 1 }}>
        <BackLeft />
      </Box>
      <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
        <BackRight />
      </Box>
    </MainCard>
  );
}

ProfileCard.propTypes = { focusInput: PropTypes.func };
