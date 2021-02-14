import React, {useEffect, useState} from 'react';
import {Table} from "./Table";
import {Button} from "./Button";
import {Option} from './Option'


export const Counter = () => {

    let mxValue = 5
    let mnValue = 0

    const [maxValue, setmaxValue] = useState<number>(mxValue)
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
        }
    }

    const [startValue, setValue] = useState<number>(minValue)

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
                setbutton(true)
                setError(false)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('minCounter', JSON.stringify(minValue))
    }, [minValue])


    const [button, setbutton] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const testError = (maxValue: number, minValue: number) => {
        if (minValue >= maxValue || minValue < 0) {
            setError(true)
            setbutton(true)
        } else {
            setError(false)
            setbutton(false)
        }
    }

    const onChangeMAX = (onEmax: number) => {
        setmaxValue(onEmax)
        testError(onEmax, minValue)

    }

    const onChangeMIN = (onEmin: number) => {
        setmValue(onEmin)
        testError(maxValue, onEmin)

    }

    return (
        <div className='App'>
            <div className='counter'>
                <div className='up'>
                    <Option onChangeMIN={onChangeMIN} error={error} onChangeMAX={onChangeMAX}
                            name='max value' valueOption={maxValue}/>
                    <Option onChangeMIN={onChangeMIN} error={error} onChangeMAX={onChangeMAX}
                            name='start value' valueOption={minValue} />
                </div>
                <div className='down'>

                    <div className={button ? 'colorOff' : ''}>
                        <Button set={set} startValue={startValue} minValue={minValue} increase={reset}
                                buttonName='set'/>
                    </div>

                </div>
            </div>
            <div className='counter'>
                <div className={button ? 'up' : 'upOff'}>
                    <Table  minValue={minValue} table={button ? startValue:'need press "set" ' } maxValue={maxValue}/>
                </div>
                <div className={button ? 'down' : 'downOff'}>
                    <Button button={button} startValue={startValue} maxValue={maxValue} increase={increase}
                            buttonName='inc'/>
                    <Button button={button} startValue={startValue} minValue={minValue} increase={reset}
                            buttonName='reset'/>
                </div>
            </div>
        </div>
    )
}

