import * as React from 'react';
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
import { visuallyHidden } from '@mui/utils';
import { Fade, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Modal, TextField } from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import SearchIcon from '@mui/icons-material/Search';

function createData(id, nomina, nombre, riesgo) {
  return {
    id,
    nomina,
    nombre,
    riesgo,
  };
}

const rows = [
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 50),
  createData(1, 32158, "Alberto Lopez", 20),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
  createData(1, 32158, "Alberto Lopez", 80),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'nomina', numeric: true, label: 'Nómina' },
  { id: 'nombre', numeric: false, label: 'Nombre' },
  { id: 'riesgo', numeric: true, label: 'Riesgo' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
        sx={{
            backgroundColor: "black",
        }}
    >
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
                color: "white",
            }}
          >
            <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{
                    color: 'white',
                    '&:hover': {
                    color: '#888B8D',
                    },
                    '&.Mui-active': {
                        color: '#888B8D',
                        "& .MuiTableSortLabel-icon": {
                            color: "#888B8D",
                        },
                    },
                }}
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
        backgroundColor: "black",
        borderBottom: "1px solid #888B8D",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h5"
        id="tableTitle"
        component="div"
        fontWeight="bold"
        color="white"
      >
        Empleados
      </Typography>
      <TextField
        label="Buscar"
        slotProps={{
            input: {
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: "common.white" }}/>
                    </InputAdornment>
                )
            }
        }}
        variant="standard"
      />
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, border: "1px solid #888B8D" }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{
                minWidth: 750,
                "& .MuiTableRow-root:hover": {
                    "& .MuiTableCell-root": {
                        backgroundColor: "#202020",
                    }
                }
            }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody
                sx={{
                    "& .MuiTableCell-root": {
                        color: "white",
                        backgroundColor: "black",
                    }
                }}
            >
              {visibleRows.map((row) => (
                <TableRow
                    tabIndex={-1}
                    key={row.id}
                    sx={{
                        cursor: 'pointer',

                    }}
                    onClick={handleModalOpen}
                >
                <TableCell component="th" scope="row" align="right">
                  {row.nomina}
                </TableCell>
                <TableCell align="left">{row.nombre}</TableCell>
                <TableCell align="right">
                    <Box
                        component="div"
                        sx={{
                            display: "center",
                            alignItems: "center",
                            justifyContent: "end",
                            mr: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                backgroundColor:
                                    row.riesgo > 66 ? "red" : row.riesgo > 33 ? "yellow" : "green",
                                marginRight: 2,
                                mb: 0.4,
                            }}
                        />
                        <Typography>{row.riesgo}%</Typography>
                    </Box>
                </TableCell>
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
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
          sx={{
            color:"white",
            backgroundColor: "black",
            '.MuiIconButton-root': {
                color: 'white',
            }
          }}
        />
        <Modal
            open={open}
            onClose={handleModalClose}
            >
            <Fade in={open}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 2,
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h4" textAlign="center" sx={{ width: "70%", borderBottom: "1px solid #ED8B00" }}>Alberto Lopez</Typography>
                    </Box>
                    <List
                        sx={{
                            "& .MuiListItem-root":{
                                pl: 2,
                            }
                        }}
                    >
                        <ListItem
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <ListItemIcon>
                                <Brightness1Icon  sx={{ fontSize: "12px", color: "#ED8B00" }}/>
                            </ListItemIcon>
                            <ListItemText primary="Recomendación" />
                        </ListItem>
                    </List>
                </Box>
            </Fade>
        </Modal>
      </Paper>
    </Box>
  );
}
