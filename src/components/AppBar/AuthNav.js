import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../../styles/AuthNav.module.css'



export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className = {css.link} 
        activeClassName = {css.active}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className = {css.link} 
        activeClassName = {css.active}
      >
        Логин
      </NavLink>
    </div>
  );
}