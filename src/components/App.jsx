import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        {/* <Filter ... />
  <ContactList ... /> */}
      </div>
    );
  }
}
