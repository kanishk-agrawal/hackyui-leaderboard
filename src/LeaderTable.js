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
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import diamond from './diamond.png';
import gold from './gold.png';
import silver from './silver.png';
import bronze from './bronze.jpeg';
 

const Diamond = () =><img src={diamond} width={40} height={40} />
const Gold = () =><img src={gold} width={40} height={40} />
const Silver = () =><img src={silver} width={40} height={40} />
const Bronze = () =><img src={bronze} width={40} height={40} />



 
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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Rank',
  },
  {
    id: 'couponCode',
    numeric: true,
    disablePadding: false,
    label: 'Coupon code',
  },

  {
    id: 'uniqueImpression',
    numeric: true,
    disablePadding: false,
    label: 'Unique impressions',
  },
  {
    id: 'totalImpression',
    numeric: true,
    disablePadding: false,
    label: 'Total impressions',
  },
  {
    id: 'orderCount',
    numeric: true,
    disablePadding: false,
    label: 'No. of orders',
  },
  {
    id: 'cancelledOrderCount',
    numeric: true,
    disablePadding: false,
    label: 'Orders cancelled',
  },
  {
    id: 'score',
    numeric: true,
    disablePadding: false,
    label: 'Final Score',
  },
 
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
      
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <h2 style={{marginLeft: '4px', display: 'inline-block'}}>{headCell.label}</h2>
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

 

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
       
        <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center'}}>
          <img src='https://play-lh.googleusercontent.com/vLRYqQT8ZRgxMZ4z5UQlk7ultWym0zXVoPY8XM36I6cKHbo6prH0JPaPo4Reir7YnY8' height={100} width={100}/>
          
          <h1 style={{fontSize: '72px',}}>Flipkart Health+ referral leaderboard</h1>
 </div>
   
    </Toolbar>
  );
}

 

export default function EnhancedTable(props) {
  const {data} = props;
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('score');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  if(!data && !data.length) return null;


  const computeGradeIcon = (index) => {
    if(index <= 10) {
      return <Diamond />
    } else if(index <= 50 ) {
      return <Gold />
    } else if(index <= 75 ) {
      return <Silver />
    } else if(index <= 150 ) {
      return <Bronze />
    }
    return null
  }
  const computeBackground = (index) => {
    if(index < 5) {
      return {backgroundColor: '#cacaca'}
    } else if(index < 10 ) {
      return <Gold />
    } else if(index < 10 ) {
      return <Gold />
    } else if(index < 15 ) {
      return <Silver />
    
    } else if(index < 20 ) {
      return <Bronze />
    }
    return null
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                    // style={index < 5 ? {backgroundColor: '#AAE3F0'} : {}}
                    // style={index< 10 ? {color: 'cyan'} : index >10 ? {color: 'gold'} : index > 50 ? {color: '#cacaca'} : index >75 ? {color: 'brown'} : index >100 ? {color:'black'} : {color: 'black'}}
                  >
                     
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      style={{display: 'flex', alignItems: 'center'}}
                    >
                      {/* change with name */}
                      {/* {row.userId} */}
                      {computeGradeIcon(row.name)}
                      <h3 style={{marginLeft: '3px'}}>{row.name}</h3>
                    </TableCell>
                    <TableCell align="left"><h3>{row.couponCode}</h3></TableCell>
                    <TableCell align="left"><h3>{row.uniqueImpression}</h3></TableCell>
                    <TableCell align="left"><h3>{row.totalImpression}</h3></TableCell>
                    <TableCell align="left"><h3>{row.orderCount}</h3></TableCell>
                    <TableCell align="left"><h3>{row.cancelledOrderCount}</h3></TableCell>
                    <TableCell align="left"><h3>{row.score}</h3></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 100, 200]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>
  );
}