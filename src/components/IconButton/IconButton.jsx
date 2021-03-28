import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ children = null, onClick = () => null, ...allyProps }) => (
  <button className={s.button} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;