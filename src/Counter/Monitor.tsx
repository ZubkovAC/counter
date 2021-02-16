import {Table} from "./Table";
import {Button} from "./Button";
import React from "react";

type MonitorType = {
    set: () => void
    blockButton: boolean
    maxValue: number
    minValue: number
    startValue: number
    reset: () => void
    incValue:()=>void
}


export const Monitor = (props: MonitorType) => {
    return (
        <div className='counter'>
            <div className={props.blockButton ? 'up' : 'upOff'}>
                <Table minValue={props.maxValue} table={props.blockButton ? props.startValue : 'need press "set" '}
                       maxValue={props.maxValue}/>
            </div>
            <div className={props.blockButton ? 'down' : 'downOff'}>
                <Button button={props.blockButton} startValue={props.startValue} maxValue={props.maxValue}
                        increase={props.incValue}
                        buttonName='inc'/>
                <Button  button={props.blockButton} startValue={props.startValue} minValue={props.minValue}
                        increase={props.reset}
                        buttonName='reset'/>
                <Button set={props.set} buttonName='set'/>
            </div>
        </div>
    )
}
