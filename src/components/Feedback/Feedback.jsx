import s from './Feedback.module.css';

const Feedback = ({ outputFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedback}>
      {outputFeedback.map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
