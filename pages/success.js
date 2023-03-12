import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireWorks } from '../lib/utils'

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks();
    }, []);

  return (
    <div className='success-wrapper' >
      <div className="success">
        <p className="icon">
            <BsBagCheckFill/>
        </p>
        <h2>Thank You for your Order!</h2>
        <p className="email-msg">Check your email for the receipt. </p>
        <p className="description">
            If you have any Questions Emain to <a className='email' href='mailto:voidmain.1812@gmail.com' >voidmain.1812@gmail.com</a>
        </p>
        <Link href="/" >
            <button className="btn" type='button' width="300px"> Continue Shopping </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
