import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {fetchLaunchIfNeeded} from "app/actions/launch/show";

const useStyles = makeStyles({
    image: {
      maxWidth: 300,
      diplay: 'block',
      margin: '0 auto'
    }
  });

export default function LaunchDialog(props) {
  const { onClose, open, dispatch, launch, launchShow } = props;
  const [scroll, setScroll] = React.useState('paper');
  const classes = useStyles();

  useEffect(() => {
    if(open && launchShow.get('data').isEmpty()){
      fetchLaunchIfNeeded(dispatch, launchShow, launch.get('flight_number'));
    }
  });

  const handleClose = () => {
    onClose();
  };

  const renderRocketImage = () => {
    const rocketImage = launch.getIn(['links', 'flickr_images', 0])
    return <img className={classes.image} src={rocketImage} alt="Launch Image" />;
  }

  let readableDate = () => {
    let date = launch.get('launch_date_utc')
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">{launch.get('mission_name')}</DialogTitle>
        <DialogContent dividers={scroll}>
          <DialogContentText>
            {launch.get('details')}
            <br/><strong>Launch Date:</strong> {readableDate()}
            <br/>
            {renderRocketImage()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}