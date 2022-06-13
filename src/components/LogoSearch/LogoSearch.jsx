import React from 'react'
import logo from '../../img/logo.png'
import "./LogoSearch.css"
import {UilSearch} from '@iconscout/react-unicons'
export const LogoSearch = () => {
  return (
    <>
    
    <div className="LogoSearch">
        <img src={logo} alt="logo" />
        <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icons">
                <UilSearch />
            </div>
        </div>
    </div>
    
    </>
  )
}

