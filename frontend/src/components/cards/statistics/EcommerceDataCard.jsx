import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';

// ==============================|| CHART WIDGET - ECOMMERCE CARD  ||============================== //

export default function EcommerceDataCard({ title, count, percentage, color, iconPrimary, children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar variant="rounded" color={color}>
                {iconPrimary}
              </Avatar>
              <Typography variant="subtitle1">{count}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography variant="h5">{title}</Typography>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}

EcommerceDataCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.node,
  color: PropTypes.any,
  iconPrimary: PropTypes.node,
  children: PropTypes.any
};
