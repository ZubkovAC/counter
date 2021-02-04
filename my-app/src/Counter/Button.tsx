import React from "react";

type ButtonPropsType = {
    buttonName:string
    increase:()=>void
    maxValue?:number
    minValue?:number
    startValue:number
}

export const Button = (props:ButtonPropsType) =>{

    const color = props.startValue===props.maxValue ? 'colorOff' : ''
    const colorOff = props.startValue===props.minValue ? 'colorOff' : ''


    return(
        <span  >
            <button className={`${colorOff} ${color}`} onClick={props.increase}>{props.buttonName}</button>
        </span>
    )
}