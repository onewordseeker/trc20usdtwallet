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
import TextField from '@mui/material/TextField';
import { ArrowSwapHorizontal, MoneyRecive, DollarCircle } from 'iconsax-react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import SyntaxHighlight from 'utils/SyntaxHighlight';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
// project-imports
import MainCard from 'components/MainCard';
import { transfer } from 'api/walletApi/Wallet';

// ==============================|| MODAL - TRANSITIONS ||============================== //

export default function TransitionsModal({ rows, _open = false, walletAddressForTransferModal = '', handleTransferModal }) {
  const [fromWalletAddress, setFromWalletAddress] = useState('');
  const [toWalletAddress, setToWalletAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [transferProgress, setTransferProgress] = useState(0);
  const [LogsString, setLogsString] = useState('');
  const [open, setOpen] = useState(_open);
  const [names, setNames] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(_open);
  const [openSendingProgressModal, setOpenSendingProgressModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);
  const handleClose = () => {
    setOpen(false);
    handleTransferModal(false, '');
  };
  const handleCloseSendingProgressModal = () => {
    setOpenSendingProgressModal(false);
    handleCloseConfirm();
    setLogsString('');
  };

  useEffect(() => {
    if (_open == true) {
      rows.forEach((row) => {
        setNames((prevRows) => [...prevRows, { id: row.id, walletAddress: row.name, supply_wallet: row.supply_wallet }]);
      });
      handleOpen();
      setFromWalletAddress(walletAddressForTransferModal);
      setwalletAddress([walletAddressForTransferModal]);
    }
  }, [_open]);
  const [walletAddress, setwalletAddress] = useState([]);
  const [walletAddress2, setwalletAddress2] = useState([]);
  const [fromAddresses, setFromAddresses] = useState([]);
  const [transferIndex, setTransferIndex] = useState(0);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 } } };
  const [isCancelled, setIsCancelled] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setFromAddresses(event.target.value);
    setwalletAddress(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value }
    } = event;
    setToWalletAddress(event.target.value);
    setwalletAddress2(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleTransfer = async () => {
    setLogsString('');
    setOpenSendingProgressModal(true);
    setIsCancelled(false);
    try {
      for (let index = 0; index < fromAddresses.length; index++) {
        const from = fromAddresses[index];
        setTransferIndex(index);

        if (from !== '') {
          const data = {
            from,
            to: toWalletAddress,
            amount: amount
          };

          try {
            const response = await transfer(data);
            const _amount = '$' + amount;

            if (response?.hash) {
              const hash = response.hash;
              const _log = `Details of #${index}:\n       Status: 'Transfer initiated'\n       To wallet: ${toWalletAddress}\n       Amount: ${_amount}\n       From: ${from}\n       Hash: ${hash}\n`;
              setLogsString((prevLogs) => prevLogs + _log);
            } else {
              const _log = `Details of #${index}:\n       Status: 'Transfer failed'\n       To wallet: ${toWalletAddress}\n       Amount: ${_amount}\n       From: ${from}\n       Error: ${response.message}\n`;
              setLogsString((prevLogs) => prevLogs + _log);
            }

            const progress = (100 / (fromAddresses.length - 1)) * index;
            console.log(progress, 'progress', index + 1, fromAddresses.length);
            setTransferProgress(progress);
          } catch (error) {
            const _log = `Details of #${transferIndex}:\n       Status: 'Transfer failed'\n       To wallet: ${toWalletAddress}\n       Error: ${error.message}\n`;
            setLogsString((prevLogs) => prevLogs + _log);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <MainCard title="Transfer Funds" modal darkTitle content={false}>
            <CardContent>
              {/* <Typography id="modal-modal-description">{walletAddressForTransferModal}</Typography> */}
              <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <Stack spacing={1}>
                    <InputLabel>From</InputLabel>
                    <FormControl>
                      <InputLabel id="demo-multiple-checkbox-label">Select Wallet</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        fullWidth
                        value={walletAddress}
                        onChange={handleChange}
                        input={<OutlinedInput placeholder="Select Wallet" />}
                        renderValue={(selected) => selected.slice(0, 2).join(', ')}
                        MenuProps={MenuProps}
                      >
                        {names
                          .filter((r) => r.supply_wallet == 1)
                          .map((row) => (
                            <MenuItem key={row.id} value={row.walletAddress}>
                              <Checkbox checked={walletAddress.indexOf(row.walletAddress) > -1} />
                              <ListItemText
                                primary={row.id + ' (' + row.walletAddress.slice(0, 5) + '...' + row.walletAddress.slice(28, 34) + ')'}
                              />
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={2}
                  md={2}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}
                >
                  <ArrowSwapHorizontal />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <Stack spacing={1}>
                    <InputLabel>To</InputLabel>
                    <FormControl>
                      <InputLabel id="demo-multiple-checkbox-label">Select Wallet</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        fullWidth
                        value={walletAddress2}
                        onChange={handleChange2}
                        input={<OutlinedInput placeholder="Select Wallet" />}
                        renderValue={(selected) => selected.slice(0, 2).join(', ')}
                        MenuProps={MenuProps}
                      >
                        {names
                          .filter((r) => r.supply_wallet == 0)
                          .map((row) => (
                            <MenuItem key={row.id} value={row.walletAddress}>
                              <Checkbox checked={walletAddress2.indexOf(row.walletAddress) > -1} />
                              <ListItemText
                                primary={row.id + ' (' + row.walletAddress.slice(0, 5) + '...' + row.walletAddress.slice(28, 34) + ')'}
                              />
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12} mt={2}>
                <Stack spacing={1}>
                  <InputLabel>Amount</InputLabel>
                  <TextField
                    type="number"
                    fullWidth
                    value={amount}
                    onChange={(text) => setAmount(text.target.value)}
                    inputProps={{ min: 0 }}
                    placeholder="Enter Amount"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DollarCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </Stack>
              </Grid>
              <Typography sx={{ opacity: 0 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non c
              </Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
              <Button color="error" size="small" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleOpenConfirm} variant="contained" size="small">
                <ArrowSwapHorizontal /> <Typography sx={{ marginLeft: '5px' }}>Transfer</Typography>
              </Button>
            </Stack>
          </MainCard>
        </Fade>
      </Modal>
      <Modal open={openConfirm} onClose={handleCloseConfirm} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="Confirm Transfer Funds" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">
              Are you sure you want to transfer {'$' + amount} to {toWalletAddress}?
            </Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleCloseConfirm}>
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
