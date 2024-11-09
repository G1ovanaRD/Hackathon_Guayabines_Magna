import React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(id, payroll, name, fecha, motivo) {
  return { id, payroll, name, fecha, motivo };
}

const rows = [
  createData(1, 'B000012159', 'HERNANDEZ DE LA CRUZ VERONICA ', '1/8/2024', 'PROBLEMAS FAMILIARES '),
  createData(2, 'B000013689', 'GONZALEZ NIETO LUIS JAVIER', '9/1/2024', 'FALTA AL RIT'),
  createData(3, 'B000012656', 'RAMÍREZ HERNANDEZ LUIS ANGEL', '1/10/2024', 'FALTA AL RIT'),
  createData(4, 'B000013362', 'CHAVEZ RANGEL JACQUELINE', '1/17/2024', 'CAMBIO DE RESIDENCIA'),
  createData(5, 'B000013366', 'DE LA CRUZ CALDERON CAROLINA', '1/19/2024', 'CAMBIO DE EMPLEO '),
  createData(6, 'B000013634', 'PEREZ LOPEZ ALEJANDRA NOHEMI', '1/17/2024', 'PROBLEMAS FAMILIARES '),
];

const headCells = [
  { id: 'payroll', numeric: false, disablePadding: true, label: 'Nómina' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Nombre' },
  { id: 'fecha', numeric: false, disablePadding: false, label: 'Fecha de baja' },
  { id: 'motivo', numeric: false, disablePadding: false, label: 'Motivo de salida' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

function EnhancedTableToolbar() {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        Departed Employees
      </Typography>
    </Toolbar>
  );
}

export default function DepartedList() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('payroll');
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5; 

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const visibleRows = React.useMemo(
    () =>
      rows.slice().sort((a, b) => {
        const orderMultiplier = order === 'desc' ? -1 : 1;
        return orderMultiplier * (a[orderBy] < b[orderBy] ? -1 : 1);
      }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ maxWidth: '1000px', width: '100%', mx: 'auto' , paddingTop: '100px' }}>
      <Paper sx={{ width: '100%', mb: 2, padding:'15px' }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table sx={{ width: '100%' }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => (
                <TableRow hover tabIndex={-1} key={row.id}>
                  <TableCell component="th" scope="row" padding="none">
                    {row.payroll}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.motivo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
          labelRowsPerPage=""
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      </Paper>
    </Box>
  );
  
}
