import {useState} from "react";
import { useDispatch } from "react-redux";
import css from '../ContactFotm/ContactForm.module.css'
import * as operations from "../../redux/contacts/operations";


function ContactForm () {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = (value) => dispatch(operations.addContacts(value));

  const handelChange= e => {
        const{name, value}= e.target;

        switch(name){
            case 'name':
            setName(value)
            break;

            case 'number':
            setNumber(value)
            break;

            default:
            return;
        }
    }

  const  handelSubmit = e => {
  e.preventDefault();

  formSubmitHandler({ name, number });

  reset();
}

    const reset = () => {
        setName("");
        setNumber("")
    }


  return (
    <div className = {css.content}>
            <form className={css.form} onSubmit={handelSubmit}>
                <p className= {css.text}>Новый Контакт</p>

            <label className={css.label}>
                Имя
                <input
                    className={css.input}
                    value={name}
                    onChange={handelChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                >

                </input>
            </label>



            <label className={css.label}>
                Номер тел.
                <input
                    className={css.input}
                    value={number}
                    onChange={handelChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>


            <button
                className={css.button}
                type="submit">
                Добавить 
            </button>


        </form>
    </div>
)

}


export default ContactForm

