import { Fragment, useLayoutEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';

import { Category2, Wallet2, Profile2User, TextalignJustifyleft, DocumentCopy } from 'iconsax-react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// project-imports
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { MenuFromAPI } from 'menu-items/dashboard';
import useAuth from 'hooks/useAuth';

import useConfig from 'hooks/useConfig';
import { MenuOrientation, HORIZONTAL_MAX_ITEM } from 'config';
import { useGetMenu, useGetMenuMaster } from 'api/menu';
import { useLocation } from 'react-router-dom';

function isFound(arr, str) {
  return arr.items.some((element) => {
    if (element.id === str) {
      return true;
    }
    return false;
  });
}

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { logout, user } = useAuth();

  const { menuOrientation } = useConfig();
  const { menuLoading } = useGetMenu();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const [permissions, setPermissions] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [selectedItems, setSelectedItems] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [menuItems, setMenuItems] = useState({ items: [] });

  let dashboardMenu = MenuFromAPI();
  useLayoutEffect(() => {
    if (menuLoading && !isFound(menuItem, 'group-dashboard-loading')) {
      menuItem.items.splice(0, 0, dashboardMenu);
      setMenuItems({ items: [...menuItem.items] });
    } else if (!menuLoading && dashboardMenu?.id !== undefined && !isFound(menuItem, 'group-dashboard')) {
      menuItem.items.splice(0, 1, dashboardMenu);
      setMenuItems({ items: [...menuItem.items] });
    } else {
      setMenuItems({ items: [...menuItem.items] });
    }
    const perms = JSON.parse(user?.permissions);
    setPermissions(perms);
    // eslint-disable-next-line
  }, [menuLoading]);

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems = [];
  let lastItemId;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items.slice(lastItem - 1, menuItems.items.length).map((item) => ({
      title: item.title,
      elements: item.children,
      icon: item.icon,
      ...(item.url && {
        url: item.url
      })
    }));
  }

  const navGroups = menuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        if (item.url && item.id !== lastItemId) {
          return (
            <Fragment key={item.id}>
              {menuOrientation !== MenuOrientation.HORIZONTAL && <Divider sx={{ my: 0.5 }} />}
              <NavItem item={item} level={1} isParents />
            </Fragment>
          );
        }
        return (
          <NavGroup
            key={item.id}
            selectedID={selectedID}
            setSelectedID={setSelectedID}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return (
    <Box
      sx={{
        pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
        '& > ul:first-of-type': { mt: 0 },
        display: isHorizontal ? { xs: 'block', lg: 'flex' } : 'block',
        marginLeft: '30px'
      }}
    >
      {/* {navGroups} */}
      {/* <Button
        variant="shadow"
        size="small"
        sx={{ width: '90%', justifyContent: 'flex-start' }}
        // component={Link}
        href="https://phoenixcoded.authordesk.app/"
        target="_blank"
      >
         Dashboard
      </Button> */}

      <ToggleButtonGroup orientation="vertical" sx={{ width: '100%' }}>
        <ButtonBase component={Link} to={'/dashboard/default'}>
          <Button
            sx={{
              marginBottom: '10px',
              minWidth: drawerOpen ? '90%' : '40px',
              justifyContent: 'flex-start',
              color: 'white'
            }}
            variant={currentPath == '/dashboard/default' ? 'contained' : ''}
            startIcon={<Category2 />}
          >
            {drawerOpen ? 'Dashboard' : ''}
          </Button>
        </ButtonBase>
        {permissions[2] == '1' && (
          <ButtonBase component={Link} to={'/wallets'}>
            <Button
              sx={{
                marginBottom: '10px',
                minWidth: drawerOpen ? '90%' : '40px',
                justifyContent: 'flex-start',
                color: 'white'
              }}
              variant={currentPath == '/wallets' ? 'contained' : ''}
              startIcon={<Wallet2 />}
            >
              {drawerOpen ? 'Destination Wallets' : ''}
            </Button>
          </ButtonBase>
        )}
        {permissions[3] == '1' && (
          <ButtonBase component={Link} to={'/users'}>
            <Button
              sx={{
                marginBottom: '10px',
                minWidth: drawerOpen ? '90%' : '40px',
                justifyContent: 'flex-start',
                color: 'white'
              }}
              variant={currentPath == '/users' ? 'contained' : ''}
              startIcon={<Profile2User />}
            >
              {drawerOpen ? 'Manage Users' : ''}
            </Button>
          </ButtonBase>
        )}
        {permissions[4] == '1' && (
          <ButtonBase component={Link} to={'/transactions'}>
            <Button
              sx={{
                marginBottom: '10px',
                minWidth: drawerOpen ? '90%' : '40px',
                justifyContent: 'flex-start',
                color: 'white'
              }}
              variant={currentPath == '/transactions' ? 'contained' : ''}
              startIcon={<TextalignJustifyleft />}
            >
              {drawerOpen ? 'Transactions' : ''}
            </Button>
          </ButtonBase>
        )}
        {permissions[5] == '1' && (
          <ButtonBase component={Link} to={'/activity-logs'}>
            <Button
              sx={{
                marginBottom: '10px',
                minWidth: drawerOpen ? '90%' : '40px',
                justifyContent: 'flex-start',
                color: 'white'
              }}
              variant={currentPath == '/activity-logs' ? 'contained' : ''}
              startIcon={<DocumentCopy />}
            >
              {drawerOpen ? 'Activity Logs' : ''}
            </Button>
          </ButtonBase>
        )}
        {user?.is_admin == '1' && (
          <ButtonBase component={Link} to={'/admin-wallet'}>
            <Button
              sx={{
                marginBottom: '10px',
                minWidth: drawerOpen ? '90%' : '40px',
                justifyContent: 'flex-start',
                color: 'white'
              }}
              variant={currentPath == '/admin-wallet' ? 'contained' : ''}
              startIcon={<Wallet2 />}
            >
              {drawerOpen ? 'Admin Wallet' : ''}
            </Button>
          </ButtonBase>
        )}
      </ToggleButtonGroup>
    </Box>
  );
}
