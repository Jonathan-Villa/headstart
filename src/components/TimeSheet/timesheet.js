import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import * as M from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useStyles } from "./styles";
import {useSelector} from "react-redux"
import { StudentTimeSheet } from "../../components/student";
import { AdminTimeSheet } from "../../components/admin";




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1988/08/31", 305, 3.7, 67, 4.3),
  createData("1984/04/03", 452, 25.0, 51, 4.9),
  createData("2020/10/24", 262, 16.0, 24, 6.0),
  createData("1990/09/18", 159, 6.0, 24, 4.0),
  createData("1987/07/07", 356, 16.0, 49, 3.9),
  createData("1999/04/04", 408, 3.2, 87, 6.5),
  createData("2002/03/17", 237, 9.0, 37, 4.3),
  createData("1994/08/14", 375, 0.0, 94, 0.0),
  createData("2007/02/12", 518, 26.0, 65, 7.0),
  createData("1998/12/25", 392, 0.2, 98, 0.0),
  createData("2009/02/14", 318, 0, 81, 2.0),
  createData("1992/04/01", 360, 19.0, 9, 37.0),
  createData("1988/11/11", 437, 18.0, 63, 4.0),
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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Date Submitted" },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Student Name",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Weekly Date Period",
  },
  { id: "carbs", numeric: true, disablePadding: false, label: "Approved By" },
  { id: "protein", numeric: true, disablePadding: false, label: "Grant" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <M.TableHead>
      <M.TableRow>
        <M.TableCell padding="checkbox">
          <M.Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </M.TableCell>
        {headCells.map((headCell) => (
          <M.TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <M.TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </M.TableSortLabel>
          </M.TableCell>
        ))}
      </M.TableRow>
    </M.TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <M.Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <M.Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </M.Typography>
      ) : (
        <M.Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          TimeSheet
        </M.Typography>
      )}

      {numSelected > 0 ? (
        <M.Tooltip title="Delete">
          <M.IconButton aria-label="delete">
            <DeleteIcon />
          </M.IconButton>
        </M.Tooltip>
      ) : (
        <M.Tooltip title="Filter list">
          <M.IconButton aria-label="filter list">
            <FilterListIcon />
          </M.IconButton>
        </M.Tooltip>
      )}
    </M.Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function TimeSheet() {
  


  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <M.Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <M.TableContainer>
          <M.Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <M.TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <M.TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <M.TableCell padding="checkbox">
                        <M.Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </M.TableCell>
                      <M.TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </M.TableCell>
                      <M.TableCell align="right">{row.calories}</M.TableCell>
                      <M.TableCell align="right">{row.fat}</M.TableCell>
                      <M.TableCell align="right">{row.carbs}</M.TableCell>
                      <M.TableCell align="right">{row.protein}</M.TableCell>
                    </M.TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <M.TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <M.TableCell colSpan={6} />
                </M.TableRow>
              )}
            </M.TableBody>
          </M.Table>
        </M.TableContainer>
        <M.TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </M.Paper>
      <M.FormControlLabel
        control={<M.Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      
      
    </div>
  );
}

export { TimeSheet };
