import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Notification: {
    fontSize: '50px',
    fontWeight: 'bold',
    backgroundImage:
      'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});

const Notification = ({ message }) => {
  const classes = useStyles();
  return <span className={classes.Notification}>{message}</span>;
};
Notification.defaultProps = {
  message: '',
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
