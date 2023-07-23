import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import {faGift} from '@fortawesome/free-solid-svg-icons'

import './Search.css'


function Search() {
  return (
    <div className='search'>
        <input type="text" placeholder='search.....'/>
     <div className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} id='icon'/>
        </div>
        <div className="acc">
        <h1><p><FontAwesomeIcon icon={faCircleUser} id='acc' /></p></h1>
     </div>
         <div className="question">
         <FontAwesomeIcon icon={faCircleQuestion} id='question'/>
         </div>
         <div className="gift">
         <FontAwesomeIcon icon={faGift} id='gift' />   
         </div>
         <div>
            <img src="../public/images/freshteam.png" alt="" />
         </div>
         
     </div>
  )
}


export default Search
