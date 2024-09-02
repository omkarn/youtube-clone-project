import React from 'react'

function Button({ name }) {
    return (
        <button className='px-3 py-1 mr-3 mb-3 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-gray-200'>{name}</button>
    )
}

export default Button