import React from "react";

type ButtonPropsType = {
    buttonName:string
    increase?:()=>void
    maxValue?:number
    minValue?:number
    startValue:number
    set?:()=>void
    button?:boolean
}

export const Button = (props:ButtonPropsType) =>{

    const color = props.startValue===props.maxValue ? 'colorOff' : ''
    const colorOff = props.startValue===props.minValue ? 'colorOff' : ''


    return(
        <span >
            {props.buttonName==='set'
                ? <button onClick={props.set}>{props.buttonName}</button>
                : <button className={`${color} ${colorOff}`} onClick={props.increase}>{props.buttonName}</button>
        }
        </span>
    )
}

