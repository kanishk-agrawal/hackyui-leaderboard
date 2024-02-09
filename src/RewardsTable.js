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
import cross from './cross.png';
import tick from './tick.png';
import myntra from './myntra.webp';
import myntralogo from './myntralogo.png';
import fkvip from './fkvip.jpeg';
import ct from './ct.jpeg';
import sonyliv from './sonyliv.webp';
import sonylivlogo from './sonyliv-logo-box.png';
import fkhdisc from './fkh20.jpeg';


function createData(
  levels,
  diamond,
  gold,
  silver,
  bronze,
  ) {
  return {
    levels,
    diamond,
    gold,
    silver,
    bronze, 
  };
}


const renderItem = (url, title, description) => {
  return <>
  <div style={{display: 'flex',     justifyContent: 'flex-start'}}>
<img src={url} width={100} height={100} style={{objectFit: 'contain'}} />
<div style={{    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '15px'
    }}>

  <p style={{    
    padding: '5px 0px',
    'font-size': '20px',
    'overflow-x': 'hidden',
    'max-height': '50px',
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis',
    margin: 0,
    fontWeight: 'bold'}}>
      {title}</p>
  <p style={{padding: 0,margin: 0, color: 'black', fontWeight: 500}}>{description}</p>
</div>
  </div>
  </> 
}


const Sonylivlogo = renderItem("https://static.timesprime.com/2x/sonyliv-logo-box.png?v=11", 'Sony Liv', '12 months Sony LIV Premium subscription!');
const FkFlights = renderItem("https://static.timesprime.com/3x/fkt-logo-box.png?v=2", 'Flipkart Flights', 'Get 10% discount on flight bookings on Flipkart Travel!');
const FkVIP = renderItem(fkvip, 'Flipkart VIP', 'Get 1 year VIP membership worth 500 for free!');
// const FKH_FamilyDoctor = renderItem("https://static.timesprime.com/3x/fkt-logo-box.png?v=2", 'Flipkart Flights', 'Get 10% discount on flight bookings on Flipkart Travel!');
const FKH_FamilyDoctor = renderItem("https://res.fkhealthplus.com/ui_images/FamilyDoctor.webp", 'Family Doctor', 'Get unlimited doctor consultations on FKH+');
const MyntraLogo = renderItem(myntralogo, 'Myntra Insider', 'Become Myntra Insider at 99/- only.');
const CT = renderItem(ct, 'Cleartrip', 'Upto 50% discount on selected routes.');
const Fkhdisc = renderItem(fkhdisc, 'FKH+ discount', 'Health+ flat 20% off for new customer.');
const Fkcoupon = renderItem("https://rukminim2.flixcart.com/fk-p-lockin/120/120/rs-img/2021EDFCP01_logo_250_181_06-22-2021_17-29-45.png?q=90", 'Flipkart Watches', 'Extra 15% Off On Watches Upto Rs. 500');
const Fkgift = renderItem("https://rukminim2.flixcart.com/fk-p-lockin/120/120/rs-img/2103T00FKV01_logo_250_181_04-21-2021_18-16-17.png?q=90",'Flipkart Gift Card', 'ClicknWin Reward Flipkart Voucher Worth Rs.5'); 
const Fkgrocery = renderItem("https://rukminim2.flixcart.com/fk-p-lockin/160/160/rs-img/2021EDFCP01_logo_250_181_06-22-2021_17-29-45.png?q=90",'Flipkart Grocery', 'Extra Flat 50 Rs off on next 6 purchases on Grocery with Savings Pass'); 
 
const Tick = () => <img src={tick} width={40} height={40} />
const Cross = () =><img src={cross} width={40} height={40} />
const Diamond = () =><img src={diamond} width={40} height={40} />
const Gold = () =><img src={gold} width={40} height={40} />
const Silver = () =><img src={silver} width={40} height={40} />
const Bronze = () =><img src={bronze} width={40} height={40} />




 
// const  = () => <img src={fkhdisc} width={100} height={40} />

 

// let rows = [<h1>'Myntra'</h1>, ];
let rows = [ 
  createData(FkFlights,<Tick />, <Tick />, <Tick />, <Tick />),
  createData(FKH_FamilyDoctor,<Tick />, <Tick />, <Tick />, <Tick />),
  createData(FkVIP,<Tick />, <Tick />, <Tick />, <Cross />),
  createData(MyntraLogo,<Tick />, <Tick />, <Tick />, <Cross />),
  createData(Fkgrocery,<Tick />, <Tick />, <Tick />, <Cross />),
  createData(Sonylivlogo, <Tick />, <Tick />, <Cross />, <Cross />),
  createData(CT,<Tick />, <Tick />, <Cross />, <Cross />),
  createData(Fkhdisc,<Tick />, <Tick />, <Cross />, <Cross />),
  createData(Fkcoupon,<Tick />, <Cross />, <Cross />, <Cross />),
  createData(Fkgift,<Tick />, <Cross />, <Cross />, <Cross />),
  

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
    id: 'levels',
    numeric: false,
    disablePadding: true,
    label: <h2 style={{marginLeft: '4px', display: 'inline-block'}}>Gifts & Levels</h2>
  },
  {
    id: 'diamond',
    numeric: false,
    disablePadding: true,
    label: <div style={{display: 'flex', alignItems: 'center'}}><Diamond /><h2 style={{marginLeft: '4px', display: 'inline-block'}}>Diamond</h2></div>
  },
  {
    id: 'gold',
    numeric: true,
    disablePadding: false,
    label: <div style={{display: 'flex', alignItems: 'center'}}><Gold /><h2 style={{marginLeft: '4px', display: 'inline-block'}}>Gold</h2></div>
  },

  {
    id: 'silver',
    numeric: true,
    disablePadding: false,
    label: <div style={{display: 'flex', alignItems: 'center'}}><Silver /><h2 style={{marginLeft: '4px', display: 'inline-block'}}>Silver</h2></div>
  },
  {
    id: 'bronze',
    numeric: true,
    disablePadding: false,
    label: <div style={{display: 'flex', alignItems: 'center'}}><Bronze /><h2 style={{marginLeft: '4px', display: 'inline-block'}}>Bronze</h2></div>
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
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
               {headCell.label}
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
     
    </Toolbar>
  );
}

 

export default function EnhancedTable(props) {
  const {data} = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  if(!rows && !rows.length) return null;

  return (
    <Box sx={{ width: '100%' }}>

      <h1 style={{fontSize: '72px', margin: 0}}>Rewards for referring</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span><img src='https://play-lh.googleusercontent.com/vLRYqQT8ZRgxMZ4z5UQlk7ultWym0zXVoPY8XM36I6cKHbo6prH0JPaPo4Reir7YnY8' height={50} width={50}/></span>
      <h2 style={{fontSize: '24px', display: 'inline-block'}}>Join 2M+ members who win rewards and cashbacks everyday on Flipkart Health+</h2>
      </div>
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
              rowCount={rows.length}
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
                  > 
                     
                    <TableCell align="left">{row.levels}</TableCell>
                    <TableCell align="left">{row.diamond}</TableCell>
                    <TableCell align="left">{row.gold}</TableCell>
                    <TableCell align="left">{row.silver}</TableCell>
                    <TableCell align="left">{row.bronze}</TableCell>
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
         
      </Paper>
    
    </Box>
  );
}