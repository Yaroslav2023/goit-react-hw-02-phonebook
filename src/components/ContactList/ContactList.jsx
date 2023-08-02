import React from 'react';
import cl from './contactList.module.css';
import Contact from './Contact';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={cl.list}>
      <Contact contacts={contacts} deleteContact={deleteContact} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
