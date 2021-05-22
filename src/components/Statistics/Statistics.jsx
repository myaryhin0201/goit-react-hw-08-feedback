import PropTypes from 'prop-types';
import useStyles from './StatisticsStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const classes = useStyles();
  return (
    <ul className={classes.statistics__list}>
      <li className={classes.statistics__list__item}>Good: {good}</li>
      <li className={classes.statistics__list__item}>Neutral: {neutral}</li>
      <li className={classes.statistics__list__item}>Bad: {bad}</li>
      <li className={classes.statistics__list__item}>Total: {total()}</li>
      <li className={classes.statistics__list__item}>
        Positive feedback: {positivePercentage()}%
      </li>
    </ul>
  );
};

Statistics.defaultTypes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
