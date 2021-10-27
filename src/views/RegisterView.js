import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import css from 'styles/RegisterView.module.css';



export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className = {css.content}>
      <h1 className= {css.text}>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Имя
          <input className={css.input} type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <button className={css.button} type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}