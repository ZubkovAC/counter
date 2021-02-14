import React from "react";

type OptionPropsType = {
    valueOption: number

   /* incOption: () => void
    decrease: () => void
    decreaseMIN: () => void
    incOptionMIN: () => void*/
    error: boolean
    name:string
    onChangeMAX: (onChange: number) => void
    onChangeMIN: (onChange: number) => void
}

export const Option = (props: OptionPropsType) => {
    return (
        <div className='option'>
            <div className={props.error?'colorOff': 'option'}>
                max value :
                <input type="number" value={props.valueOption} onChange={e => {
                    props.onChangeMAX(+e.currentTarget.value)
                }}/>
            </div>
           {/* <div className={props.error?'colorOff': 'option'}>
                start value :
                <input type="number" value={props.startValue} onChange={e => {
                    props.onChangeMIN(+e.currentTarget.value)
                }}/>
            </div>
           */}

        </div>
    )
}