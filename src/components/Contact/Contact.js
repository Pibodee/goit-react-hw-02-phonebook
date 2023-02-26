export const Contact = ({ name, number, onDelete }) => {
    return (
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={onDelete}>Remove contact</button>
      </li>
    );
}