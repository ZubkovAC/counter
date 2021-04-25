import React from "react";

type OptionPropsType = {
    valueOption: number
    error: boolean
    name: string
    onChangeValue: (onChange: number) => void

}

export const Settings = (props: OptionPropsType) => {
    return (
        <div className='option'>
            <div className={props.error ? 'colorOff' : 'option'}>
                {props.name}
                    <input type="number" value={props.valueOption} onChange={ e => props.onChangeValue(+e.currentTarget.value)}/>
            </div>

        </div>
    )
}