// src/components/ContactList.js
import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Submitted Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts submitted yet.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((contact, idx) => (
            <li key={idx} className="border p-2 rounded">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
