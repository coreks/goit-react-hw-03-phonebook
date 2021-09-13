import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';
import css from '../ContactsList/ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <ContactsItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;
