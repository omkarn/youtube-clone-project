import React from 'react'
import { LIST } from '../utils/constants'
import Button from './Button';

function ButtonList() {

    return (
        <div className='py-3'>
            {LIST.map((listItem, i) => <Button name={listItem} key={i} />)}
        </div>
    )
}

export default ButtonList;