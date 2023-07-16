import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ( {title, stats}) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

    return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.statList}>
      {stats.map(stat => {
        return <li key={stat.id} className={css.item} style = {{backgroundColor: getRandomHexColor()}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}&#37;</span>
      </li>
      })}
    </ul>
  </section>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
