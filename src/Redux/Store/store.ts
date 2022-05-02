import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { meReducer } from '../Reducers/meReducer/meReducer';
import { profileReducer } from '../Reducers/profileReducer/ProfileReducer';
import { loginReducer } from '../Reducers/loginFormReducer/loginReducer';
import { passwordReducer } from '../Reducers/passwordReducer/passwordReducer';
import { appReducer } from '../Reducers/appReducer/appReducer';
import { packsReducer } from '../Reducers/packsReducer/packsReducer';
import { cardsReducer } from '../Reducers/cardsReducer/cardsReducer';

export const rootReducer = combineReducers( {
  me: meReducer,
  profile: profileReducer,
  login: loginReducer,
  app: appReducer,
  passwordRegister: passwordReducer,
  packs: packsReducer,
  cards: cardsReducer,
} );

export const store = createStore( rootReducer, applyMiddleware( thunk ) );

//@ts-ignore
window.store = store;