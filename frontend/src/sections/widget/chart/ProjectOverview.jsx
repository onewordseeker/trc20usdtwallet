import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import { ThemeMode } from 'config';
import useAuth from 'hooks/useAuth';

// assets
import { MoneySend } from 'iconsax-react';

// ==============================|| CHART ||============================== //

function TaskStatusChart({ color, data }) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  // chart options
  const areaChartOptions = {
    chart: {
      id: 'new-stack-chart',
      type: 'area',
      stacked: true,
      sparkline: {
        enabled: true
      },
      offsetX: -20
    },
    plotOptions: {
      bar: {
        borderRadius: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      hover: {
        size: 5
      }
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: {
      x: {
        show: false
      }
    },
    grid: {
      show: false
    }
  };
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [color],
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [color, mode, primary, secondary, line, theme]);

  const [series] = useState([{ name: 'Orders', data }]);

  return <ReactApexChart options={options} series={series} type="area" height={60} />;
}

// ==============================|| CHART - PROJECT OVERVIEW ||============================== //

export default function ProjectOverview({ totalBalance, _openTransferModal, openTransferAllModal }) {
  const [permissions, setPermissions] = useState([]);
  const { logout, user } = useAuth();

  useEffect(() => {
    const perms = JSON.parse(user?.permissions);
    setPermissions(perms);
  },[]);
  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h3">${totalBalance}</Typography>
          <Grid container alignItems="flex-end">
            <Grid item xs={12}>
              <Stack spacing={0.25}>
                <Typography variant="h6">Total Balance(All Wallets)</Typography>
              </Stack>
            </Grid>
            {/* <Grid item xs={6}>
              <TaskStatusChart color={theme.palette.primary.main} data={[5, 25, 3, 10, 4, 50, 0]} />
            </Grid> */}
          </Grid>
        </Grid>

        <Grid container xs={12} md={4} sx={{ justifyContent: 'flex-end' }}>
          {permissions[0] == '1' && (
            <Grid xs={7} md={6}>
              <Button onClick={() => openTransferAllModal(true)} item variant="contained" startIcon={<MoneySend />} size="large">
                Transfer ALL
              </Button>
            </Grid>
          )}
          {permissions[1] == '1' && (
            <Grid xs={5} md={6}>
              <Button onClick={() => _openTransferModal(true)} variant="contained" startIcon={<MoneySend />} size="large">
                Transfer
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
}

TaskStatusChart.propTypes = { color: PropTypes.string, data: PropTypes.array };
