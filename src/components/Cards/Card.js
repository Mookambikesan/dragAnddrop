import React, { useState } from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from '../Dropdown/Dropdown';

export default function Card() {

    const [showDropdown , setShowDropdown] =useState(false);

  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_top_labels'>
                <Chip text="Frontend" color="green" />
                {/* <Chip close text="Frontend" color="green" /> */}

            </div>
            <div className="card_top_more" onClick={()=>setShowDropdown(true)}>
          <MoreHorizontal />
          {
            showDropdown && (
         
          <Dropdown 
          onClose={()=>setShowDropdown(false)}
         >
            <div className="card_dropdown">
              <p>Delete Board</p>
            </div>
          </Dropdown>
            )}
        </div>

        </div>
        <div className='card_title'>
            sfsfsfdfsf

        </div>
        <div className='card_footer'>
            <p><Clock />29 sept</p>
            <p><CheckSquare />1/4</p>

        </div>
      
    </div>
  )
}
