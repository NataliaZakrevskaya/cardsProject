import { appReducer } from '../../Redux/Reducers/appReducer/appReducer';
import { AppInitialStateType } from '../../Redux/Reducers/appReducer/types';
import { appActions } from '../../Redux/Actions/appActions/appActions';
import { AppRequestStatus } from '../../enums';

test( 'correct status message should be set', () => {

  let startState: AppInitialStateType = {
    status: 'idle',
    isVisible: false,
    globalError: '',
    isLoad: false,
  };

  const endState = appReducer( startState, appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  expect( endState.status ).toBe( AppRequestStatus.LOADING );
} );