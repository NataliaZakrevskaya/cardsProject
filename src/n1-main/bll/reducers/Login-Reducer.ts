const initState = {}

type InitStateType = typeof initState;



export const loginReducer = (state: InitStateType = initState, action: any): InitStateType => {
    switch (action.type) {
        case '': {
            return {...state}
        }
        default: return state
    }
}
