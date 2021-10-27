import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactFotm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";
import css from 'styles/ContactsView.module.css'

export default function ContactsView() {
    const dispatch = useDispatch();
  
    useEffect(() => dispatch(fetchContacts()), [dispatch]);
  
    return (
      <>
        <ContactForm />
  
        <p className= {css.text}>
         Контакты 
        </p>
        <Filter />
        <ContactList />
      </>
    );
  }