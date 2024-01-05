import React from 'react';
import handleChange from '../utils/handleChange';

const Input = ({label,type,name,value,setValue}) => {
    return (
        <div>
            <label> {label} : </label>
            <input
                type= {type ? type : 'text'}
                name={name}
                onChange={(e)=>handleChange(e,value,setValue)}
                className='w-full p-2 border focus:outline-none rounded'
            />
        </div>
    );
};

export default Input;