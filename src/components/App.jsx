
import { Component } from "react"
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from "./Form/Form";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (values) => {
    let newContact = values;
    newContact.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
}

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
};
