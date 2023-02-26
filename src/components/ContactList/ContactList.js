import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { ListStyled } from './Contactlist.styled';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const List = contacts => {
    return contacts.map(({ id, name, number }) => {
      return (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          delId={id}
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
            onDelete={onDelete}
            delId={id}
          />
        );
      });
  };

  return <ListStyled>{filter ? Filtered(contacts, filter) : List(contacts)}</ListStyled>;
};

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

