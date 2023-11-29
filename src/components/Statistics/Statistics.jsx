import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <ul className={css.list}>
          <li>
              <p className={css.good}>Good: {good}</p>
          </li>
          <li>
              <p className={css.neut}>Neutral: {neutral}</p>
          </li>
          <li>
              <p className={css.bad}>Bad: {bad}</p>
          </li>
          <li>
              <p>Total: {total}</p>
          </li>
          <li>
              <p>Positive feedback: {positivePercentage}%</p>
          </li>
      </ul>
  )
}

export default Statistics