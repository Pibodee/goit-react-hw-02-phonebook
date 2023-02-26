import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, filter }) => {
  const List = contacts => {
    return contacts.map(({ id, name, number }) => {
      return (
        <Contact
          key={id}
          name={name}
          number={number}
          //   onDelete={onDelete}
          //   id={contact.id}
        />
      );
    });
  };

  const Filtered = (contacts, filter) => {
    return contacts
      .filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      })
      .map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            //   onDelete={onDelete}
            //   id={contact.id}
          />
        );
      });
  };

  return <ul>{filter ? Filtered(contacts, filter) : List(contacts)}</ul>;
};
