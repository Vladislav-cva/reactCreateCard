import React from 'react';

import Input from '../input/Input';
import './cardStyle.sass';

function Card(){
    return(
        <div className="card">
            <div className='mainContent'>
                <div className='cardNumber'>
                    <div className='number'>
                        <Input 
                            name='cardNumberInput'
                            placeholderName='0000 0000 0000 0000' 
                            maxLength={16} 
                            type='number'
                        />
                    </div>
                </div>
                <div className='cardInfo'>
                    <div className='dateCard'>
                        <Input 
                            name='cardDateInputMounth'
                            placeholderName='mm'
                            maxLength={2} 
                            type='number'
                        />
                        <Input 
                            name='cardDateInputYear'
                            placeholderName='yy'
                            maxLength={2} 
                            type='number'
                        />
                    </div>
                    <div className='cvcCard'>
                        <Input 
                            name='cardCvcInput' 
                            placeholderName='cvc'
                            maxLength={3}
                            type='number' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
