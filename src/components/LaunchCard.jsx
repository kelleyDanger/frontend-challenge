import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {resetLaunch} from "app/actions/launch/show";
import LaunchDialog from './LaunchDialog';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  content:{
    maxHeight: 700,
    '& .launch-details': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  media: {
    height: 140,
  },
});

export default function LaunchCard(props) {
  const classes = useStyles();
  const {launch, launchShow, dispatch} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetLaunch(dispatch);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={launch.getIn(['links', 'mission_patch'])}
          title={launch.get('mission_name')}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {launch.get('mission_name')}
          </Typography>
          <Typography className="launch-details" variant="body2" color="textSecondary" component="p">
            {launch.get('details') ? launch.get('details') : 'No Launch details available'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleClickOpen} size="small" color="primary">
          Learn More
        </Button>
        <LaunchDialog
          dispatch={dispatch}
          open={open}
          onClose={handleClose}
          launch={launch}
          launchShow={launchShow}
        />
      </CardActions>
    </Card>
  );
}