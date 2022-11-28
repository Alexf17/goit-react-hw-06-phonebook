import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { Wrap, TitleBook, ContactTitle, ContactWrap } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrap>
        <TitleBook>Phonebook</TitleBook>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <ContactWrap>
          <Filter />
          <ContactsList />
        </ContactWrap>
      </Wrap>
    </>
  );
};
