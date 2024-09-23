import { useState, useEffect } from 'react';

// material-ui
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import SyntaxHighlight from 'utils/SyntaxHighlight';
import { transfer } from 'api/walletApi/Wallet';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| MODAL - TRANSITIONS ||============================== //

export default function TransferAllModal({ rows, _open = false, walletAddressForTransferModal = '', handleTransferModal }) {
  const [fromWalletAddress, setFromWalletAddress] = useState('');
  const [toWalletAddress, setToWalletAddress] = useState('');
  const [open, setOpen] = useState(_open);
  const [openConfirm, setOpenConfirm] = useState(_open);
  const [fromAddresses, setFromAddresses] = useState([]);
  const [toAddresses, setToAddresses] = useState([]);
  const [transferIndex, setTransferIndex] = useState(0);
  const [transferProgress, setTransferProgress] = useState(0);
  const [LogsString, setLogsString] = useState('');
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openSendingProgressModal, setOpenSendingProgressModal] = useState(false);
  const [names, setNames] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleCloseConfirm = () => setOpenConfirm(false);
  const handleClose = () => {
    setOpen(false);
    handleTransferModal(false, '');
  };
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  };

  useEffect(() => {
    setFromAddresses([]);
    setToAddresses([]);
    if (_open == true) {
      rows.forEach((row) => {
        if (row.supply_wallet == 1) {
          setNames((prevRows) => [...prevRows, { id: row.id, walletAddress: row.name, supply_wallet: row.supply_wallet }]);
        }
      });

      const newAddresses = rows.filter((r) => r.supply_wallet == 1).map((row) => row.name);
      const newToAddresses = rows.filter((r) => r.supply_wallet == 0).map((row) => row.name);
      setFromAddresses((prevAddresses) => [...prevAddresses, ...newAddresses]);
      setToAddresses((prevAddresses) => [...prevAddresses, ...newToAddresses]);
      handleOpen();
      setFromWalletAddress(walletAddressForTransferModal);
    }
  }, [_open]);
  const handleCloseSendingProgressModal = () => {
    setOpenSendingProgressModal(false);
    handleCloseConfirm();
    handleCloseConfirmModal();
    handleClose();
    setLogsString('');
  };
  const handleTransfer = async () => {
    setLogsString('');
    setOpenSendingProgressModal(true);
    try {
      for (let index = 0; index < fromAddresses.length; index++) {
        const from = fromAddresses[index];
        setTransferIndex(index + 1);

        if (from !== '') {
          const data = {
            from,
            to: toWalletAddress,
            amount: 'all'
          };

          try {
            const response = await transfer(data);
            const _amount = 'all funds';

            if (response?.hash) {
              const hash = response.hash;
              const _log = `Details of #${index + 1}:\n       Status: 'Transfer initiated'\n       To wallet: ${toWalletAddress}\n       Amount: ${_amount}\n       From: ${from}\n       Hash: ${hash}\n`;
              setLogsString((prevLogs) => prevLogs + _log);
            } else {
              const _log = `Details of #${index + 1}:\n       Status: 'Transfer failed'\n       To wallet: ${toWalletAddress}\n       Amount: ${_amount}\n       From: ${from}\n       Error: ${response.message}\n`;
              setLogsString((prevLogs) => prevLogs + _log);
            }

            const progress = (100 / fromAddresses.length) * (index + 1);
            console.log(progress, 'progress', index + 1, fromAddresses.length);
            setTransferProgress(progress);
          } catch (error) {
            const _log = `Details of #${transferIndex}:\n       Status: 'Transfer failed'\n       To wallet: ${toWalletAddress}\n     Error: ${error.message}\n`;
            setLogsString((prevLogs) => prevLogs + _log);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 } } };

  const handleChange = (event) => {
    setToWalletAddress(event.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Grid item xs={12} lg={12}>
              <Stack spacing={1}>
                <InputLabel>To</InputLabel>
                <FormControl>
                  <InputLabel id="demo-multiple-checkbox-label">Select Wallet</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    fullWidth
                    value={toWalletAddress}
                    onChange={handleChange}
                    input={<OutlinedInput placeholder="Select Wallet" />}
                    renderValue={(selected) => selected}
                    MenuProps={MenuProps}
                  >
                    {rows
                      .filter((r) => r.supply_wallet == 0)
                      .map((row) => (
                        <MenuItem key={row.id} value={row.name}>
                          <Checkbox checked={toWalletAddress == row.name ? true : false} />
                          <ListItemText primary={row.id + ' (' + row.name.slice(0, 5) + '...' + row.name.slice(28, 34) + ')'} />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Typography sx={{ opacity: 0 }}>Duis mollis, est non commodo luctus, nisi erat poollis, est non c</Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={() => (toWalletAddress ? setOpenConfirmModal(true) : null)} variant="contained" size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      <Modal
        open={openConfirmModal}
        onClose={handleCloseConfirmModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">
              Are you sure you want to transfer all funds from {fromAddresses.length} wallets to {toWalletAddress}. ?
            </Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseConfirmModal}>
              Cancel
            </Button>
            <Button onClick={handleTransfer} variant="contained" size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      <Modal
        open={openSendingProgressModal}
        onClose={handleCloseSendingProgressModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainCard title="Transfering Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">
              <LinearWithLabel variant="determinate" value={transferProgress} />
            </Typography>
            <SyntaxHighlight>{LogsString}</SyntaxHighlight>
            <Typography sx={{ opacity: 0 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non c
            </Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseSendingProgressModal}>
              Close
            </Button>
          </Stack>
        </MainCard>
      </Modal>
    </>
  );
}
