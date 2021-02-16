import {Settings} from "./Settings";
import {Button} from "./Button";
import React from "react";

type CustomizationType ={
    set:()=>void
    blockButton:boolean
    error:boolean
    onChangeMAX:(a:number)=>void
    onChangeMIN:(a:number)=>void
    maxValue:number
    minValue:number
    startValue:number
    reset:()=>void
}

export const Customization = (props:CustomizationType) =>{
    return (
        <div className='counter'>
            <div className='up'>

                <Settings  key={'max'} error={props.error} onChangeValue={props.onChangeMAX}
                          name={'max value'} valueOption={props.maxValue}/>
                <Settings key={'start'} error={props.error} onChangeValue={props.onChangeMIN}
                         name={'start value'} valueOption={props.minValue}/>
            </div>
            <div className='down'>

                <div className={props.blockButton ? 'colorOff' : ''}>
                    {props.error
                        ? <Button error={props.error} set={props.set} startValue={props.startValue}
                                  minValue={props.minValue} increase={props.reset}
                                  buttonName='Error'/>
                        : <Button error={props.error} set={props.set} startValue={props.startValue}
                                  minValue={props.minValue} increase={props.reset}
                                   buttonName='set' /> }

                </div>
            </div>
        </div>
    )
}
