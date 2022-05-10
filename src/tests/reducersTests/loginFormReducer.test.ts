import { loginReducer } from '../../Redux/Reducers/loginFormReducer/loginReducer';
import { LoginFormActions, LoginFormInitialState } from '../../Redux/Actions/loginFormActions/loginFormActions';

let startState: typeof LoginFormInitialState;

beforeEach( () => {
    startState = {
      isLoggedIn: false,
      user: {
        avatar: '',
        created: 5,
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        updated: 5,
        _id: '',
      },
      error: '',
    };
  },
);

test( 'status should be equal "true"', () => {
  const endState = loginReducer( startState, LoginFormActions.setIsLoggedInAC( true ) );
  expect( endState.isLoggedIn ).toBe( true );
} );

test( 'status should be equal "false"', () => {
  const endState = loginReducer( startState, LoginFormActions.setIsLoggedInAC( false ) );
  expect( endState.isLoggedIn ).toEqual( false );
} );

test( 'bug must exist', () => {
  const endState = loginReducer( startState, LoginFormActions.setErrorAC( 'Error' ) );
  expect( endState.error ).toBe( 'Error' );
} );

