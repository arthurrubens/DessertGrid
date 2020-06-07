
import React from 'react';
import {
    withStyles,
    makeStyles
} from '@material-ui/core/styles';

import {
    TableRow,
    TableCell,
    IconButton,
    Button,
    Collapse,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import RowExpandedContent from './RowExpandedContent';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const ratingsSum = row.ratings.reduce((prev, next) => prev + next, 0);
    const ratingsAvg = 0.05 * ratingsSum / row.ratings.length;
    const classes = useRowStyles();
    const headerTableCellAlign = "left";
    return (
        <React.Fragment>
            <StyledTableRow className={classes.root} key={row.title}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <StyledTableCell component="th" scope="row">
                    {row.title}
                </StyledTableCell>
                <StyledTableCell align={headerTableCellAlign}>{row.calories}</StyledTableCell>
                <StyledTableCell align={headerTableCellAlign}>{row.fat}</StyledTableCell>
                <StyledTableCell align={headerTableCellAlign}>{row.carbs}</StyledTableCell>
                <StyledTableCell align={headerTableCellAlign}>{row.protein}</StyledTableCell>
                <StyledTableCell align={headerTableCellAlign}>
                    <Button>
                        <Rating
                            name="read-only"
                            value={ratingsAvg}
                            precision={0.1}
                            readOnly
                        />
                    </Button>
                </StyledTableCell>
            </StyledTableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                    >
                        <RowExpandedContent
                            row={row}
                            setOpen={setOpen}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>
    )
}