import React from 'react'
import "./SecondBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSuitcase} from '@fortawesome/free-solid-svg-icons'

const SecondBar = () => {
    return(
        <div className='Two'>
            <div className="job">
            <FontAwesomeIcon icon={faSuitcase} id='job'/>
            </div>
            <select name="Add Candidate" className='Cd'>
        <option value="Full Stack">Add Candidate</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Back-End">None</option> 
      </select>
            
        </div>
    )
}
export default SecondBar