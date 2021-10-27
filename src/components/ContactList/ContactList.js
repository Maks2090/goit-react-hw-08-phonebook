import css from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContacts } from "../../redux/contacts/operations";
import {getVisibleContacts } from '../../redux/contacts/selectors'


function ContactList() {

    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    useEffect(() => dispatch(fetchContacts()), [dispatch]);
    const deleteContact = (value) => dispatch(deleteContacts(value));

    return (
        <ul className={css.list}>
            {contacts.map((contact) => {
                return(
                     <li key={contact.id} className={css.item} >

                        {contact.name} : {contact.number}

                        <button
                            className={css.button}
                            type="submit"
                            onClick={() => deleteContact(contact) }
                        >
                            Удалить
                        </button>
                    </li>
                );
               
            })}
        </ul>
    );
}



export default ContactList