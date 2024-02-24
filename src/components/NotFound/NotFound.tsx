import React from 'react'
import img from '../../assets/images/pepe.png'

export default function NotFound(): JSX.Element {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={img} className='w-50 my-3' alt="Not Found" />
            <h2 className='fs-1 text-uppercase fw-bold py-2'> I handled Not Found, You can go back now!</h2>
        </div>
    )
}
