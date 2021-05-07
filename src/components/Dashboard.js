import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Title } from 'react-admin';
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 350, 
  },
});
export default function MediaCard() {
  const classes = useStyles(); 
  return(
  <Card className={classes.root}>
      <Title title="Welcome to the administration" /> 
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.amcharts.com/docs/v4/wp-content/uploads/sites/2/2019/03/image-7.png"  
          title="Results of Election"  
        />
        </CardActionArea>
      <CardContent>Result of election 2020</CardContent> 
  </Card>
  );
}

  
 