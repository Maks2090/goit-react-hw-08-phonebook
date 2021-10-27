import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import css from 'styles/Navigation.module.css';



const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
      <nav>
        <NavLink to="/" exact className = {css.link} activeClassName = {css.active}>
          Главная
        </NavLink>
  
        {isLoggedIn && (
          <>
            <NavLink
              to="/contacts"
              exact
              className = {css.link}
              activeClassName = {css.active}
            >
              Телефонная книга
            </NavLink>
           
          </>
        )}
      </nav>
    );
  };
  
  export default Navigation;