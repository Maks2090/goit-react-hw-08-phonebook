
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import PrivateRoute from "./components/Roure/PrivateRoute";
import PublicRoute from "./components/Roure/PublicRoute";
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import css from './styles/App.module.css'


export default function App(){
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCurrentUser());}, [dispatch]
  );

  return (
    <div className= {css.body} >
      <AppBar />
       <Switch> 
         <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
          </PrivateRoute>
       </Switch>
     
    </div>
  )
}


