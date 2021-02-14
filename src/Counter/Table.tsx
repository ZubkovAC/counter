import React from "react";

type TablePropsType = {
    table:number
    maxValue:number
}

export const Table =(props:TablePropsType) =>{
    return (
        <div className={props.table ===props.maxValue? 'color':''}>
            {props.table}

        </div>
    )
}