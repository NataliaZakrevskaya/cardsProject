const initState = {}

type InitStateType = typeof initState;



export const registerReducer = (state: InitStateType = initState, action: any): InitStateType => {
    switch (action.type) {
        case '': {
            return {...state}
        }
        default: return state
    }
}
