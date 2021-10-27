import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import css from 'styles/LoginView.module.css';


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className = {css.content}>
      <h1 className= {css.text}>Страница логина</h1>

      <form className={css.form} onSubmit={handleSubmit}  autoComplete="off">
        <label className={css.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <button className={css.button} type="submit">Войти</button>
      </form>
    </div>
  );
}

