import React from 'react';

import {
  ContactListUl,
  ContactListLi,
  ButtonDelete,
} from './ContactList.styled';
import { FcPhoneAndroid } from 'react-icons/fc';

export const ContactList = ({ contacts, deleteContact }) => (
  <ContactListUl>
    {contacts.map((contact, id) => (
      <ContactListLi key={id}>
        <FcPhoneAndroid />
        {contact.name}: {contact.number}
        <ButtonDelete type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </ButtonDelete>
      </ContactListLi>
    ))}
  </ContactListUl>
);
