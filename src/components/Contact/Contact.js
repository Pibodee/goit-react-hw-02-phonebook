import PropTypes from 'prop-types';

export const Contact = ({ name, number, onDelete }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Remove contact</button>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
};
