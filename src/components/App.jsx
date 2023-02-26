import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = values => {
    let newContact = values;
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

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onInput={this.onFiletr} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
