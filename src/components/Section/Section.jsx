import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Feedback: {
    textAlign: 'center',
    marginBottom: '20px',
    paddingTop: '20px',
  },
  Statistics: {
    textAlign: 'center',
  },
  LeaveFeedback: {
    backgroundImage:
      'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});

const Section = ({ title, children, classname }) => {
  const classes = useStyles();
  return (
    <div className={classes[classname]}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
Section.defaultProps = {
  title: '',
  classname: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
};

export default Section;
