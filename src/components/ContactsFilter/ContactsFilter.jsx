import PropTypes from 'prop-types';
import css from '../ContactsFilter/ContactsFilter.module.css';

const ContactsFilter = ({ value, onChange }) => (
  <label className={css.filter__label}>
    Find contacts by name
    <input
      type="text"
      value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      onChange={onChange}
    />
  </label>
);

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
