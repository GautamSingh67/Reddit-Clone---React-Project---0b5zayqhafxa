import React from 'react'

export function Nav({onClick}) {
    return (

        <nav className='nav-bar'>
            <button type='button' className='btn'> Login</button>
            <button type='button' className='btn' onClick={onClick}> Add new post</button>
             
        </nav>

    )
}
