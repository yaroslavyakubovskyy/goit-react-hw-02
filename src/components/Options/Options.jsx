import s from './Options.module.css';

const Options = ({ options, updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.option}>
      {options.map(option => (
        <button onClick={() => updateFeedback(option)} key={option}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
