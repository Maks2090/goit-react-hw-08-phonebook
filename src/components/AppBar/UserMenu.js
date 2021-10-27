import { useDispatch, useSelector } from 'react-redux';
import { getUsername }  from '../../redux/auth/auth-selectors';
import  { logOut } from '../../redux/auth/auth-operations';
import css from 'styles/UserMenu.module.css'



export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
 
  return (
    <div >
      
      <span  className= {css.text}>Добро пожаловать, {name}</span>
      <button className= {css.button} type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}