import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

// assets
import { LockCircle, Lock, Profile } from 'iconsax-react';

function getPathIndex(pathname) {
  let selectedTab = 0;
  switch (pathname) {
    case '/apps/profiles/user/2fa':
      selectedTab = 1;
      break;
    case '/apps/profiles/user/password':
      selectedTab = 2;
      break;
    case '/apps/profiles/user/settings':
      selectedTab = 3;
      break;
    case '/apps/profiles/user/personal':
    default:
      selectedTab = 0;
  }
  return selectedTab;
}

// ==============================|| USER PROFILE - BASIC ||============================== //

export default function ProfileTab() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(getPathIndex(pathname));
  const handleListItemClick = (index, route) => {
    setSelectedIndex(index);
    navigate(route);
  };

  useEffect(() => {
    setSelectedIndex(getPathIndex(pathname));
  }, [pathname]);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: 'secondary.main' } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0, '/apps/profiles/user/personal')}>
        <ListItemIcon>
          <Profile size={18} />
        </ListItemIcon>
        <ListItemText primary="Personal Information" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1, '/apps/profiles/user/2fa')}>
        <ListItemIcon>
          <LockCircle size={20} />
        </ListItemIcon>
        <ListItemText primary="Two Factor Authentication" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2, '/apps/profiles/user/password')}>
        <ListItemIcon>
          <Lock size={18} />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItemButton>
    </List>
  );
}
