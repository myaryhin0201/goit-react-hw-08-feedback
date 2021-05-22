import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;

  const handleLeaveFeedback = event => {
    const targetTextContent = event.target.textContent;
    setFeedback(prevState => ({
      ...prevState,
      [targetTextContent]: feedback[targetTextContent] + 1,
    }));
    event.target.blur();
  };
  const countTotalFeedback = () => {
    const values = Object.values(feedback);
    return values.reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () =>
    Math.round(((100 * good) / countTotalFeedback()) * 10) / 10;

  return (
    <>
      <Section title="Please leave feedback" classname="Feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics" classname="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default Feedback;

// на классе

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
// import Section from './Section/Section';
// import Statistics from './Statistics/Statistics';

// import './Feedback.scss';

// class Feedback extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
//     value: 0,
//   };
//   static propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//     total: PropTypes.number,
//     positivePercentage: PropTypes.number,
//     value: PropTypes.number,
//   };
//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//     total: this.props.total,
//     positivePercentage: this.props.positivePercentage,
//     value: this.props.positivePercentage,
//   };
//   goodFeedback = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//       value: prevState.value + 1,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   neutralFeedback = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//       value: prevState.value + 0.01,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   badFeedback = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//       value: prevState.value + 0.001,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   countTotalFeedback() {
//     this.setState(prevState => ({
//       total: prevState.total + 1,
//     }));
//   }
//   countPositiveFeedbackPercentage() {
//     this.setState(prevState => ({
//       positivePercentage: Math.round((100 * prevState.value) / prevState.total),
//     }));
//   }
//   options = {
//     good: this.state.good,
//     neutral: this.state.neutral,
//     bad: this.state.bad,
//   };
//   onLeaveFeedback = {
//     goodFeedback: this.goodFeedback,
//     neutralFeedback: this.neutralFeedback,
//     badFeedback: this.badFeedback,
//   };
//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback" classname="Feedback">
//           <FeedbackOptions
//             options={this.options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics" classname="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.state.total}
//             positivePercentage={this.state.positivePercentage}
//           />
//         </Section>
//       </>
//     );
//   }
// }
