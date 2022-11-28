import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { renderFilteredContact } from 'components/App/helpers';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

import { Ul } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = renderFilteredContact(contacts, filter);
  return (
    <Ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} name={name} number={number} id={id} />
      ))}
    </Ul>
  );
};
