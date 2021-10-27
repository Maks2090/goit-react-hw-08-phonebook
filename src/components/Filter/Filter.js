import { useDispatch } from "react-redux";
import css from '../Filter/Filter.module.css'
import {filterContacts} from '../../redux/contacts/operations'

function Filter() {
  
    const dispatch = useDispatch();
    const filterChange = (value) => dispatch(filterContacts(value));

    const filterList = (e) => {filterChange(e.target.value)};
    
    return (
        <div>
            <p className={css.text}>Поиск контактов по имени</p>
            <input
                className={css.input}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={filterList}
                
            />
        </div>
    );
}



export default Filter;