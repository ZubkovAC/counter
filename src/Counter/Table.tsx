import React from "react";

type TablePropsType = {
    table:number | string
    maxValue:number
    minValue:number
    errText?:string |null
}

export const Table =(props:TablePropsType) =>{
    return (
        <div className={props.table ===props.maxValue? 'color':''}>
           {/* {props.errText? props.table : 'incorrest Value'}*/}
            {props.minValue < props.maxValue && props.minValue >= 0 ?  props.table : 'incorret Value' }
        </div>
    )
}