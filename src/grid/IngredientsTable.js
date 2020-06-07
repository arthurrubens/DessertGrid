import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography
} from '@material-ui/core';

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

export default function IngredientsTable(props) {
  const { ingredients } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Ingredients"
      />
      <CardContent>
        <List
          dense
          className={classes.root}
          aria-label="ingredients"
        >
          {
            ingredients.map((ingredient, index) => (
              <div key={index}>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={ingredient.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >{ingredient.amount}</Typography>
                        {" " + ingredient.amountUnit}
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <Divider />
              </div>
            ))
          }
        </List>

      </CardContent>
    </Card>
  );
}
