import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import IconButton from 'components/@extended/IconButton';
import { Global } from 'iconsax-react';

// third-party
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';

// project-import
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, TablePagination } from 'components/third-party/react-table';

import makeData from 'data/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ data, columns, top }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true
  });

  let headers = [];
  table.getAllColumns().map((columns) =>
    headers.push({
      label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
      // @ts-ignore
      key: columns.columnDef.accessorKey
    })
  );

  return (
    <MainCard
      title='Activity logs'
      content={false}
      secondary={<CSVExport {...{ data, headers, filename: top ? 'pagination-top.csv' : 'pagination-bottom.csv' }} />}
    >
      <ScrollX>
        <Stack>
          {top && (
            <Box sx={{ p: 2 }}>
              <TablePagination
                {...{
                  setPageSize: table.setPageSize,
                  setPageIndex: table.setPageIndex,
                  getState: table.getState,
                  getPageCount: table.getPageCount
                }}
              />
            </Box>
          )}

          <TableContainer>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableCell key={header.id} {...header.column.columnDef.meta}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {!top && (
            <>
              <Divider />
              <Box sx={{ p: 2 }}>
                <TablePagination
                  {...{
                    setPageSize: table.setPageSize,
                    setPageIndex: table.setPageIndex,
                    getState: table.getState,
                    getPageCount: table.getPageCount
                  }}
                />
              </Box>
            </>
          )}
        </Stack>
      </ScrollX>
    </MainCard>
  );
}

// ==============================|| REACT TABLE - PAGINATION ||============================== //

export default function PaginationTable({ data }) {
  // const data = [
  //   {
  //     username: '7af24301603',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'Login',
  //     description: 'User logged in to the system'
  //   },
  //   {
  //     username: '8ab643d5',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'All Funds Transfer',
  //     description: 'All funds transfered by user XYZ to wallet ABC'
  //   },
  //   {
  //     username: 'Admin',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'Partial Funds Transfer',
  //     description: 'Funds transfered by user XYZ from wallet JKL to wallet ABC'
  //   },
  //   {
  //     username: '7af24301603',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'Login',
  //     description: 'User logged in to the system'
  //   },
  //   {
  //     username: '8ab643d5',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'All Funds Transfer',
  //     description: 'All funds transfered by user XYZ to wallet ABC'
  //   },
  //   {
  //     username: 'Admin',
  //     timestamp: '2024-05-29 14:28:21',
  //     type: 'Partial Funds Transfer',
  //     description: 'Funds transfered by user XYZ from wallet JKL to wallet ABC'
  //   }
  // ];
  const columns = useMemo(
    () => [
      {
        header: 'Date & Time',
        accessorKey: 'timestamp'
      },
      {
        header: 'User',
        accessorKey: 'username'
      },
      {
        header: 'Activity Type',
        accessorKey: 'type'
      },
      {
        header: 'Description',
        accessorKey: 'description'
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns }} />;
}

ReactTable.propTypes = { data: PropTypes.array, columns: PropTypes.array, top: PropTypes.bool };
