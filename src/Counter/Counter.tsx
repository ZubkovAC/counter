import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {
    errorValueAC,
    incCounterValueAC,
    maxValueLocalStorageAC,
    minValueLocalStorageAC,
    resetLocalStorageAC, setValueFromLocalStorageAC
} from "../bll/counter-reducer";
import {Customization} from "./Customization";
import { Display } from './Display';



export const Counter = () => {

    let maxValue = useSelector<AppStateType,number>(state => state.counter.maxValue)
    let minValue = useSelector<AppStateType,number>(state => state.counter.minValue)
    let startValue = useSelector<AppStateType,number>(state => state.counter.startValue)
    let error = useSelector<AppStateType,boolean>(state => state.counter.error)
    let blockButton = useSelector<AppStateType,boolean>(state => state.counter.blockButton)

    const dispatch = useDispatch()

    const testError = (maxValue: number, minValue: number) => {
        if (maxValue <=  minValue|| minValue < 0) {
            dispatch(errorValueAC(true))
        } else {
            dispatch(errorValueAC(false))
        }
    }

    const set = () => {
        dispatch(errorValueAC(false))
        dispatch(setValueFromLocalStorageAC())
    }
    const incValue = () => {
        if (startValue >= maxValue || minValue < 0) {
            dispatch(errorValueAC(true))
        } else {
            dispatch(errorValueAC(false))
            dispatch(incCounterValueAC())
        }
    }
    const reset = () => {
        dispatch(resetLocalStorageAC())
    }
    const onChangeMAX = (newValueOnChange:number) => {
        testError(newValueOnChange,minValue)
        dispatch(maxValueLocalStorageAC(newValueOnChange))
    }
    const onChangeMIN = (newValueOnChange:number) => {
        testError(maxValue,newValueOnChange)
        dispatch(minValueLocalStorageAC(newValueOnChange))
    }

    return (
        <div className='App'>

            { !blockButton
                ? <Customization set={set} blockButton={blockButton} error={error}
                         onChangeMAX={onChangeMAX} onChangeMIN={onChangeMIN}
                         maxValue={maxValue} minValue={minValue} startValue={startValue} reset={reset}/>
                : <Display set={set} blockButton={blockButton}
                         maxValue={maxValue} minValue={minValue} startValue={startValue}
                         reset={reset} incValue={incValue} />}

        </div>
    )
}