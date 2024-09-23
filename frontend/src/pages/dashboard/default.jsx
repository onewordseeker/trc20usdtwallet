// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

// project-imports
import EcommerceDataCard from 'components/cards/statistics/EcommerceDataCard';
import EcommerceDataChart from 'sections/widget/chart/EcommerceDataChart';
import ApexColumnChart from 'sections/charts/apexchart/ApexColumnChart';
import TableBasic from '../tables/mui-table/datatable';
import TransitionsModal from 'sections/components-overview/modal/TransitionsModal';
import TransferAllModal from 'sections/components-overview/modal/TransferAllModal';
import ProjectOverview from 'sections/widget/chart/ProjectOverview';
import useAuth from 'hooks/useAuth';

// assets
import { ArrowDown, Book, Candle, CloudChange, Wallet3 } from 'iconsax-react';
import { getWallets } from 'api/walletApi/Wallet';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const theme = useTheme();
  function createData(id, name, balance, gas, partner, supply_wallet, transfer) {
    return {
      id,
      name,
      balance,
      gas,
      supply_wallet,
      partner,
      transfer
    };
  }
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [openTransferAllModal, setOpenTransferAllModal] = useState(false);
  const [walletAddressForTransferModal, setWalletAddressForTransferModal] = useState('');
  const [wallets, setWallets] = useState([]);
  const [rows, setRows] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  const [permissions, setPermissions] = useState([]);
  const { logout, user } = useAuth();

  useEffect(() => {
    const perms = JSON.parse(user?.permissions);
    setPermissions(perms);
  }, []);

  const handleTransferModal = (flag, wallet_address) => {
    setOpenTransferModal(flag);
    setWalletAddressForTransferModal(wallet_address);
  };
  const handleTransferAllModal = (flag) => {
    setOpenTransferAllModal(flag);
  };

  const getAllWallets = async () => {
    const response = await getWallets();
    setWallets(response.wallets);
    let newTotalBalance = 0;
    response.wallets.map((wallet) => {
      newTotalBalance += Number(wallet.last_balance);
      const row = createData(
        wallet.wallet_name,
        wallet.wallet_address,
        wallet.last_balance,
        wallet.trx_balance,
        wallet.partner,
        wallet.supply_wallet,
        ''
      );
      setRows((prevRows) => [...prevRows, row]);
    });
    setTotalBalance(Number(newTotalBalance)?.toFixed(2));
  };

  useEffect(() => {
    getAllWallets();
  }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* <Grid item xs={12}>
        <WelcomeBanner />
      </Grid> */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProjectOverview
              walletRows={rows}
              totalBalance={totalBalance}
              openTransferAllModal={handleTransferAllModal}
              _openTransferModal={handleTransferModal}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* row 1 */}
      <Grid item xs={12} sm={6} lg={3}>
        <EcommerceDataCard title="Active Wallets" count={wallets.length} iconPrimary={<Wallet3 />}>
          <EcommerceDataChart color={theme.palette.primary.main} />
        </EcommerceDataCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <EcommerceDataCard
          title="Average Wallet Balance"
          count={'$'+Number(totalBalance / wallets.length)?.toFixed(2)}
          color="warning"
          iconPrimary={<Book color={theme.palette.warning.dark} />}
        >
          <EcommerceDataChart color={theme.palette.warning.dark} />
        </EcommerceDataCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <EcommerceDataCard
          title="Trading Wallet"
          count={user?.withdrawal_wallet?.slice(0, 8) + '...' + user?.withdrawal_wallet?.slice(29, 34)}
          color="success"
          iconPrimary={<Candle color={theme.palette.success.darker} />}
        >
          <EcommerceDataChart color={theme.palette.success.darker} />
        </EcommerceDataCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <EcommerceDataCard
          title="Per Transaction Fee"
          count="13TRX + 300BW"
          color="error"
          iconPrimary={<CloudChange color={theme.palette.error.dark} />}
          percentage={
            <Typography color="error.dark" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowDown size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.error.dark} />
        </EcommerceDataCard>
      </Grid>

      {/* row 2 */}

      <Grid item xs={12} md={12} lg={12}>
        <Stack spacing={3}>
          <ApexColumnChart />
        </Stack>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Stack spacing={3}>
          <TableBasic _openTransferModal={handleTransferModal} rows={rows?.filter(r => r.supply_wallet == 1)} />
        </Stack>
      </Grid>
      <TransitionsModal
        rows={rows}
        handleTransferModal={handleTransferModal}
        walletAddressForTransferModal={walletAddressForTransferModal}
        _open={openTransferModal}
      />
      <TransferAllModal rows={rows} handleTransferModal={handleTransferAllModal} _open={openTransferAllModal} />
    </Grid>
  );
}
