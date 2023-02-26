import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = values => {
    let newContact = values;

    const verification = this.state.contacts.filter(
      contact=> contact.name.toLowerCase()===newContact.name.toLowerCase()
    )
    
    if (verification.length) {
      alert(`${newContact.name} is already in contacts`);
      return
    }

    newContact.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onFiletr = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onDelete = evtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== evtId),
    });
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onInput={this.onFiletr} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
