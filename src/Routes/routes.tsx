import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from '../Components/Pages/RegisterPage/RegisterPage';
import NewPasswordPage from '../Components/Pages/NewPasswordPage/NewPasswordPage';
import PacksPage from '../Components/Pages/PacksPage/PacksPage/PacksPage';
import LoginPage from '../Components/Pages/LoginPage/LoginPage';
import PasswordRecoveryPage from '../Components/Pages/PasswordRecoveryPage/PasswordRecoveryPage';
import LogoutPage from '../Components/Pages/LogoutPage/LogoutPage';
import ProfilePage from '../Components/Pages/ProfilePage/ProfilePage';
import Cards from '../Components/Pages/CardsPage/CardsPage';
import LearnedCardContainer from '../Components/Pages/LearnedCardContainer/LearnedCardContainer';
import AuthRedirectPage from '../Components/HOC/authRedirect';
import { routesPathsEnum } from './enums';
import NotFoundedPage from '../Components/NotFoundedPage/NotFoundedPage';
import style from './routes.module.css';

const AppRoutes = () => {
  return (
    <div className={ style.routesContainer }>
      <Routes>
        <Route path={ routesPathsEnum.PROFILE } element={
          <AuthRedirectPage>
            <ProfilePage/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.REGISTER } element={ <RegisterPage/> }/>
        <Route path={ routesPathsEnum.LOGIN } element={
          <LoginPage/>
        }/>
        <Route path={ routesPathsEnum.RECOVERY } element={ <PasswordRecoveryPage/> }/>
        <Route path={ routesPathsEnum.SET_PASS } element={ <NewPasswordPage/> }/>
        <Route path={ routesPathsEnum.PACKS } element={
          <AuthRedirectPage>
            <PacksPage/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.CARDS } element={
          <AuthRedirectPage>
            <Cards/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.CARDS_WITH_ID } element={
          <AuthRedirectPage>
            <Cards/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.LEARNED_CARD } element={
          <AuthRedirectPage>
            <LearnedCardContainer/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.LEARNED_CARD_WITH_ID } element={
          <AuthRedirectPage>
            <LearnedCardContainer/>
          </AuthRedirectPage>
        }/>
        <Route path={ routesPathsEnum.LOGOUT } element={ <LogoutPage/> }/>
        <Route path={ routesPathsEnum.NOT_FOUND } element={ <NotFoundedPage/> }/>
        <Route path={ '*' } element={ <Navigate to={ routesPathsEnum.NOT_FOUND }/> }/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
