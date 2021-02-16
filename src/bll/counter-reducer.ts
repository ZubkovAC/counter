
const initalState = {
    startValue: 10,
    minValue: 10,
    maxValue: 15,
    blockButton: false,
    error: false
}

type InitialStateType = typeof initalState

export const counterReducer = (state: InitialStateType = initalState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {...state, startValue: state.startValue + 1}
        case "ERROR-VALUE":
            return {...state, error: state.error = action.a }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state,
                startValue: state.minValue,
                blockButton: !state.blockButton,
            }
        case "RESET-LOCAL-STORAGE":
            return {...state, startValue: state.minValue}
        case "MAX-VALUE-LOCAL-STORAGE": {
            return {...state, maxValue: action.mxvalue}
        }
        case "MIN-VALUE-LOCAL-STORAGE":
            return {...state, minValue: action.mnvalue}
        default:
            return state
    }
}
export const incCounterValueAC = () => ({type: "INC-VALUE"} as const)
export const errorValueAC = (a:boolean) => ({type: "ERROR-VALUE",a} as const)
export const setValueFromLocalStorageAC = () => ({type: "SET-VALUE-FROM-LOCAL-STORAGE"} as const)
export const resetLocalStorageAC = () => ({type: "RESET-LOCAL-STORAGE"} as const)
export const maxValueLocalStorageAC = (mxvalue: number) => ({type: "MAX-VALUE-LOCAL-STORAGE", mxvalue} as const)
export const minValueLocalStorageAC = (mnvalue: number) => ({type: "MIN-VALUE-LOCAL-STORAGE", mnvalue} as const)


export type ActionType =
    IncCounterValueACType |
    ErrorValueAC |
    SetValueFromLocalStorageACType |
    ResetLocalStorageACType |
    MaxValueLocalStorageACType |
    MinValueLocalStorageACType


export type IncCounterValueACType = ReturnType<typeof incCounterValueAC>
export type ErrorValueAC = ReturnType<typeof errorValueAC>
export type SetValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
export type ResetLocalStorageACType = ReturnType<typeof resetLocalStorageAC>
export type MaxValueLocalStorageACType = ReturnType<typeof maxValueLocalStorageAC>
export type MinValueLocalStorageACType = ReturnType<typeof minValueLocalStorageAC>

