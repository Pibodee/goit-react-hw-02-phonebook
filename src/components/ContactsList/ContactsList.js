import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({contacts}) => {
  return (
    <ul>
          {contacts.map(contact => {
          return(<Contact
          key={contact.id}
          name={contact.name}
        //   onDelete={onDelete}
        //   id={contact.id}
        />)
      })}
    </ul>
  );
};
