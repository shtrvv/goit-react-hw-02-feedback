import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <ul className={css.list}>
          {options.map(option => {
              return (
                  <li key={option} className={css.item}>
                      <button
                          type="button"
                          name={option}
                          onClick={onLeaveFeedback}
                          className={css.btn}
                      >
                          {option}
                      </button>
                  </li>
              )
          })}
      </ul>
  )
}

export default FeedbackOptions