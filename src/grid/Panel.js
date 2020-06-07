import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Row from './Row';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    tableContainer: {
        height: props => props.tableContainerHeight,
    },
    table: {
        minWidth: 700,
    },
});

export default function Panel(props) {
    const classes = useStyles(props);
    const headerTableCellAlign="left";
    return (
        <TableContainer
            component={Paper}
            className={classes.tableContainer}
        >
            <Table
                className={classes.table}
                stickyHeader
                aria-label="sticky customized table"
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell />
                        <StyledTableCell align={headerTableCellAlign}>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align={headerTableCellAlign}>Calories</StyledTableCell>
                        <StyledTableCell align={headerTableCellAlign}>Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align={headerTableCellAlign}>Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align={headerTableCellAlign}>Protein&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align={headerTableCellAlign}>Rating</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <Row key={row.title} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
