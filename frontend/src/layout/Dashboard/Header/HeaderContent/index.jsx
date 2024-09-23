import { useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// project-imports
// import Search from './Search';
// import Message from './Message';
import Profile from './Profile';
import Localization from './Localization';
// import Notification from './Notification';
import MobileSection from './MobileSection';
import MegaMenuSection from './MegaMenuSection';
// import FullScreen from './FullScreen';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/Dashboard/Drawer/DrawerHeader';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const { i18n, menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const location = useLocation();
  const currentPath = location.pathname;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {/* {!downLG && <Search />} */}
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" color="secondary">
          {currentPath == '/dashboard/default'
            ? 'Dashboard'
            : currentPath == '/wallets'
              ? 'Wallet Management'
              : currentPath == '/transactions'
                ? 'Transactions History'
                : currentPath == '/users'
                  ? 'Manage Users'
                  : currentPath == '/activity-logs'
                    ? 'Activity Logs'
                    : currentPath == '/apps/profiles/user/personal'
                      ? 'User Profile'
                      : currentPath == '/apps/profiles/user/password'
                        ? 'Change Password'
                        : ''}
        </Typography>
      </Box>
      {/* {!downLG && megaMenu}
      {!downLG && localization} */}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* 
      <Notification />
      <FullScreen />
      <Message /> */}
      {/* {!downLG && <Profile />} */}
      <Profile />
      {/* {downLG && <MobileSection />} */}
    </>
  );
}
