import React, { useState } from 'react';

import { 
    CARD_VALUE,
    VALIDATION_MESS, 
    ERROR_MOUNTH_MESS, 
    ERROR_YEAR_MESS
} from './../../constValue/constValue';
import { IProps } from './interfaces';
import './inputStyle.sass';

function Input (props: IProps ) {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputError, setInputError] = useState<boolean>(false);
    const [inputMounthError, setInputMounthError] = useState<boolean>(false);
    const [inputYearError, setInputYearError] = useState<boolean>(false);

    function changeData(event: any) {
        if(event.target.value.length <= props.maxLength) {
            setInputValue(event.target.value)
        };

        if(event.target.value === `${CARD_VALUE}`) {
            alert('Удача!')
        };
    };

    function blureData(event: any) {
        if(event.target.value.length !== props.maxLength) {
            setInputError(true);
            event.target.style.borderColor = 'red';
        } else {
            setInputError(false);
            event.target.style.borderColor = 'grey'
        };

        if(props.name === 'cardDateInputMounth' && event.target.value > 12) {
            setInputMounthError(true)
        } else {
            setInputMounthError(false)
        };

        if(props.name ==='cardDateInputYear' && event.target.value < 20){
            setInputYearError(true)
        } else {
            setInputYearError(false)
        };
    };

    return (
        <div className='inputBlock'>
            <input 
                type={props.type} 
                className={props.name} 
                placeholder={props.placeholderName}
                onChange={changeData}
                onBlur={blureData}
                value={inputValue}
            /> 
            {inputError && 
                <div className='errorBlock'>
                    <span className='spanError'>{VALIDATION_MESS}</span>
                </div>
            }
            {inputMounthError &&
                <div className='errorBlock'>
                    <span className='spanError'>{ERROR_MOUNTH_MESS}</span>
                </div>
            }
            {inputYearError && 
                <div className='errorBlock'>
                    <span className='spanError'>{ERROR_YEAR_MESS}</span>
                </div>
            }
        </div>
    )
};

export default Input;