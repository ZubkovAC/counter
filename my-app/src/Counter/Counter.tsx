import React, {useState} from 'react';
import {Table} from "./Table";
import {Button} from "./Button";


export const Counter = () =>{

    let maxValue = 5
    let minValue = 0

    const [startValue,setValue]=useState<number>(minValue)

    const increase = () => {
        if (startValue < maxValue)
        setValue(startValue+1)
        console.log('hello')
    }

    const reset = () =>{
        setValue(minValue)
    }

    return (
        <div>
            <div className='counter'>
                <div className='up'>
                    <Table  table={startValue} maxValue={maxValue} />
                </div>
                <div className='down'>
                    <Button  startValue={startValue} maxValue={maxValue} increase={increase} buttonName='inc'/>
                    <Button  startValue={startValue} minValue={minValue} increase={reset} buttonName='reset'/>
                </div>
            </div>
        </div>
    )
}