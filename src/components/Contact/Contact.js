export const Contact = ({ name, onDelete }) => {
    return (
        <li>
            <p>{name}</p>
            <button onClick={onDelete}>Remove contact</button>
        </li>
    )
}