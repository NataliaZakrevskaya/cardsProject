import { meReducer } from '../../Redux/Reducers/meReducer/meReducer';
import { MeInitialStateType } from '../../Redux/Reducers/meReducer/types';
import { meActions } from '../../Redux/Actions/meActions/meActions';

let startState: MeInitialStateType;

beforeEach( () => {
    startState = {
      isInitialized: false,
      error: '',
    };
  },
);

test( 'correct initialize value should be set', () => {
  const endState = meReducer( startState, meActions.initializeMeAC( true ) );

  expect( endState.error ).toBe( '' );
  expect( endState.isInitialized ).toBe( true );
} );

test( 'correct error should be set', () => {
  const endState = meReducer( startState, meActions.setErrorMeAC( 'some friday error' ) );

  expect( endState.error ).toBe( 'some friday error' );
  expect( endState.isInitialized ).toBe( false );
} );