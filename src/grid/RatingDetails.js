import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  Box,
  Divider,
  Link
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export default function RatingDetails(props) {
  const { ratings } = props;
  const sum = ratings.reduce((prev, next) => prev + next, 0);
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={
          <React.Fragment>
            {"Dessert Rating ("}
            <Link
              component="button"
              color="secondary"
            >{sum}</Link>
            {")"}
          </React.Fragment>
        }
      />
      <CardContent>
        <List
          dense
          className={classes.root}
          aria-label="rating details"
        >
          {
            ratings.map((rating, index) => (
                <ListItem
                  button
                  className={classes.listItem}
                  key={index}
                >
                  <Box width={30} mr={2}>
                    {Math.floor(100 * (rating / sum)) + '%'}
                  </Box>
                  <Rating
                    xs={12}
                    name="read-only"
                    value={index + 1}
                    precision={0.1}
                    size="small"
                    readOnly
                  />
                  <Box width={30} ml={2}>
                    {rating}
                  </Box>
                  <Divider />
                </ListItem>
            ))
          }
        </List>
      </CardContent>
    </Card>
  );
}
