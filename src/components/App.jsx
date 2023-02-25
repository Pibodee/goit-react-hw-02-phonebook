
import { Component } from "react"
import { ContactForm } from "./Form/Form";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <ContactForm/>
      </>
    );
  }
};
