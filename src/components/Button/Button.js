import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ handleClick }) {
  return (
    <button type="button" className={s.Button} onClick={handleClick}>
      Go back
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
};
