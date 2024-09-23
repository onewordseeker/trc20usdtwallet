import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from './LogoMain';
import LogoIcon from './LogoIcon';
import useAuth from 'hooks/useAuth';
import { APP_DEFAULT_PATH } from 'config';
import { useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }) {
  const { isLoggedIn } = useAuth();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  return (
    <ButtonBase disableRipple {...(isLoggedIn && { component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
      <Typography key={'crypto-wallet'} variant="h3" color="white" align="center">
        {drawerOpen ? 'Crypto Wallet' : 'CW'}
      </Typography>
    </ButtonBase>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
