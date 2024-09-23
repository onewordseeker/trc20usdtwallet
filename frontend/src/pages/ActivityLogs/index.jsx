import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import FilteringTable from 'components/activityLogs';
import Grid from '@mui/material/Grid';
// project-imports

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';
import { getActivities } from 'api/walletApi/Users';

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function ActivityLogs({ layout = SimpleLayoutType.SIMPLE }) {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    getAllActivities();
  }, []);

  const getAllActivities = async () => {
    const response = await getActivities();
    let _logs = [];
    response.logs.map((user) => {
      user.activities.map((log) => {
        _logs.push({
          timestamp: log.created_at,
          username: user.fullname,
          type: log.title,
          description: log.description
        });
      });
    });
    setLogs(_logs);
  };
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      <Box>
        <Grid item xs={12}>
          <FilteringTable data={logs} />
        </Grid>
      </Box>

      {/* <FooterBlock isFull={layout === SimpleLayoutType.LANDING} /> */}
    </Suspense>
  );
}

ActivityLogs.propTypes = { layout: PropTypes.any };
