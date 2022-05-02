import {
    passwordReducer,
    PasswordInitialStateType,
    UserType
} from "../../Redux/Reducers/passwordReducer/passwordReducer";
import {passwordActions} from "../../Redux/Actions/passwordActions/passwordActions";

let startState: PasswordInitialStateType

beforeEach(() => {
        startState = {
            register: {
                addedUser: {} as userType,
                error: ''
            },
            passwordRecovery: {
                info: '',
                success: false,
                answer: false,
                html: false,
            },
            newPassword: {
                info: '',
                error: ''
            },
            e: null,
        }
    }
)

test('correct user should be added', () => {
    const endState = passwordReducer(startState, passwordActions.registerNewUserAC({
        addedUserInfo: {
            error: 'string',
            email: '',
            in: 'string'
        }
    }))

    expect(endState.register.addedUserInfo.in).toBe('string')
    expect(endState.register.addedUserInfo.email).toBe('')
})

test('correct error in addedUser should be set', () => {
    const endState = passwordReducer(startState, passwordActions.setRegisterErrorAC('some error'))

    expect(endState.register.addedUserInfo.in).toBe(undefined)
    expect(endState.register.addedUserInfo.email).toBe(undefined)
    expect(endState.register.error).toBe('some error')
})

test('correct SET_INFO_RECOVERY_PASS should be set', () => {
    const endState = passwordReducer(startState, passwordActions.setRecoveryPassInfoAC({
        info: 'string',
        success: false,
        answer: true,
        html: true,
    }))

    expect(endState.passwordRecovery.info).toBe('string')
    expect(endState.passwordRecovery.answer).toBe(true)
    expect(endState.passwordRecovery.success).toBe(false)
    expect(endState.passwordRecovery.html).toBe(true)
})

test('correct SET_INFO_NEW_PASS should be set', () => {
    const endState = passwordReducer(startState, passwordActions.setInfoNewPassAC({
        info: 'string',
        error: 'string'
    }))

    expect(endState.newPassword.info).toBe('string')
    expect(endState.newPassword.error).toBe('string')
})