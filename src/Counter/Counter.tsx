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
import { Monitor } from './Monitor';



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
                : <Monitor set={set} blockButton={blockButton}
                         maxValue={maxValue} minValue={minValue} startValue={startValue}
                         reset={reset} incValue={incValue} />}

        </div>
    )
}

/*    const Open = () =>{
        return (
            <div className='counter'>
                <div className='up'>

                    <Option1  key={'max'} error={error} onChangeValue={onChangeMAX}
                            name={'max value'} valueOption={maxValue}/>
                    <Option1 key={'start'} error={error} onChangeValue={onChangeMIN}
                            name={'start value'} valueOption={minValue}/>
                </div>
                <div className='down'>

                    <div className={blockButton ? 'colorOff' : ''}>
                        {error
                            ? <Button error={error} set={set} startValue={startValue} minValue={minValue} increase={reset}
                                      buttonName='Error'/>
                            :  <Button error={error} set={set} startValue={startValue} minValue={minValue} increase={reset}
                                       buttonName='set' /> }

                    </div>
                </div>
            </div>
        )
    }*/
/*
    const Close = () =>{
        return (
            <div className='counter'>
                <div className={blockButton ? 'up' : 'upOff'}>
                    <Table minValue={maxValue} table={blockButton ? startValue : 'need press "set" '} maxValue={maxValue}/>
                </div>
                <div className={blockButton ? 'down' : 'downOff'}>
                    <Button button={blockButton} startValue={startValue} maxValue={maxValue} increase={incValue}
                            buttonName='inc'/>
                    <Button button={blockButton} startValue={startValue} minValue={minValue} increase={reset}
                            buttonName='reset'/>
                    <Button set={set} buttonName='set'/>
                </div>
            </div>
        )
    }*/





/*   const [maxValue, setmaxValue] = useState<number>(mxValue)
   const [minValue, setmValue] = useState<number>(mnValue)

   const set = () => {
       if (!button) {
           let valueIsString = localStorage.getItem('counter')
           let minValueIsString = localStorage.getItem('minCounter')
           if (valueIsString && minValueIsString) {
               let downloadValue = JSON.parse(valueIsString)
               let downloadMValue = JSON.parse(minValueIsString)
               setmaxValue(downloadValue)
               setmValue(downloadMValue)
               setValue(downloadMValue)
               setbutton(true)
           }
       }else{
           setbutton(false)
       }
   }

   //const [startValue, setValue] = useState<number>(minValue)

   const increase = () => {
       if (button) {
           if (startValue < maxValue) {
               setValue(startValue + 1)
           } else {
               setbutton(true)
           }
       }
   }

   const reset = () => {
       if (button) {
           setValue(minValue)
       }
   }



   useEffect(() => {
       let valueIsString = localStorage.getItem('counter')
       let minValueIsString = localStorage.getItem('minCounter')
       if (valueIsString && minValueIsString) {
           let downloadValue = JSON.parse(valueIsString)
           let downloadMValue = JSON.parse(minValueIsString)
           if (downloadValue > downloadMValue && downloadMValue > 0) {
               setmaxValue(downloadValue)
               setmValue(downloadMValue)
               setValue(downloadMValue)
               setbutton(false)
           } else {
               setmaxValue(downloadValue)
               setmValue(downloadMValue)
               setValue(downloadMValue)
               setbutton(true)                 //position upload
               setError(false)
           }
       }
   },[])

   useEffect(() => {
       localStorage.setItem('counter', JSON.stringify(maxValue))
   }, [maxValue])

   useEffect(() => {
       localStorage.setItem('minCounter', JSON.stringify(minValue))
   }, [minValue])



   const [button, setbutton] = useState<boolean>(true)
   const [error, setError] = useState<boolean>(false)

   const testError = (maxValue: number, minValue: number) => {
       if (minValue >= maxValue || minValue < 0) {
           setError(true)
       } else {
           setError(false)
       }
   }

   const onChangeMAX = (onEmax: number) => {
       setmaxValue(onEmax)
       testError(onEmax, minValue)

   }

   const onChangeMIN = (onEmin: number) => {
       setmValue(onEmin)
       testError(maxValue, onEmin)

   }*/

/*    const Open = () =>{
        return (
            <div className='counter'>
                <div className='up'>

                    <Option  error={error} onChangeValue={onChangeMAX}
                            name={'max value'} valueOption={maxValue}/>
                    <Option  error={error} onChangeValue={onChangeMIN}
                            name={'start value'} valueOption={minValue}/>
                </div>
                <div className='down'>

                    <div className={button ? 'colorOff' : ''}>
                        {error
                            ? <Button error={error} set={set} startValue={startValue} minValue={minValue} increase={reset}
                                      buttonName='Error'/>
                            :  <Button error={error} set={set} startValue={startValue} minValue={minValue} increase={reset}
                                       buttonName='set' /> }

                    </div>
                </div>
            </div>
        )
    }

    const Close = () =>{
        return (
            <div className='counter'>
                <div className={button ? 'up' : 'upOff'}>
                    <Table minValue={minValue} table={button ? startValue : 'need press "set" '} maxValue={maxValue}/>
                </div>
                <div className={button ? 'down' : 'downOff'}>
                    <Button button={button} startValue={startValue} maxValue={maxValue} increase={increase}
                            buttonName='inc'/>
                    <Button button={button} startValue={startValue} minValue={minValue} increase={reset}
                            buttonName='reset'/>
                    <Button set={set} buttonName='set'/>
                </div>
            </div>
        )
    }*/