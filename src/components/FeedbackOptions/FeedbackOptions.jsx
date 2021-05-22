import PropTypes from 'prop-types';
import useStyles from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const classes = useStyles();
  return (
    <ul className={classes.FeedbackOptions__list}>
      {options.map(option => (
        <li className={classes.FeedbackOptions__item} key={option}>
          <button
            type="button"
            className={`${classes.button} ${classes[option]}`}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
