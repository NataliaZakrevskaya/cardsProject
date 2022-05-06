import React, { useEffect } from 'react';
import './app.css';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from './Components/Common/preloader/preloader';
import Header from './Components/Header/Main/Header';
import AppRoutes from './Routes/routes';
import { meTC } from './Redux/Thunk/meThunk/meThunk';
import { getStatus } from './Redux/Selectors/appSelectors/appSelectors';
import { getIsInitialized } from './Redux/Selectors/meSelectors/meSelectors';

const App = () => {

  const dispatch = useDispatch();

  const status = useSelector( getStatus );
  const initialized = useSelector( getIsInitialized );

  useEffect( () => {
    dispatch( meTC() );
  }, [] );

  if ( !initialized ) {
    return <Preloader status={ status }/>;
  }

  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
    </div>
  );
};

export default App;
