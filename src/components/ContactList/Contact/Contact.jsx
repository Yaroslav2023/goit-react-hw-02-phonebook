import React from 'react';
import cl from './contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contacts, deleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={cl.item}>
        <span>
          {name}: {number}
        </span>{' '}
        <button
          type="button"
          className={cl.btn}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
