import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Grid
} from '@material-ui/core';

import IngredientsTable from './IngredientsTable';
import RatingDetails from './RatingDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  cover: {
    height: 200,
  }
}));

export default function RowExpandedContent(props) {
  const { row } = props;
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      square={true}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={6}>
            <Card>
              <CardMedia
                className={classes.cover}
                image={row.imgSrc}
                title={row.title}
              />
              <CardContent>
                <Typography component="h5" variant="h5">
                  {props.row.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.row.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}><IngredientsTable ingredients={row.ingredients} /></Grid>
          <Grid item xs={2}><RatingDetails ratings={row.ratings} /></Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button aria-label="close" onClick={() => props.setOpen(false)}>
          CLOSE
          </Button>
      </CardActions>
    </Card>
  );
}
