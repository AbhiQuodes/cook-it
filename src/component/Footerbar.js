import React ,{useState} from 'react'
import './Footerbar.css'

const Footerbar=()=>{

    return(

    <div className='foot-container'>
        <div className='conditionList'>
            <ul>
                <li>
                Legal
                </li>
                <li>
                Terms & Conditions
                </li>
                <li>
                Cookie Policy
                </li>
                <li>
                Privacy Policy
                </li>
                <li>
                Investor Relations
                </li>
            </ul>
        </div>
        <div className='serviceList'>
        <ul>
                <li>
                Home
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    About us
                </li>
                <li>
                    Help & Support
                </li>
                
            </ul>
        </div>
        <div className='socialMediaList'>
        <ul>
                <li>
                Youtube
                </li>
                <li>
                    Linked in
                </li>
                <li>
                    Github
                </li>
                <li>
                    FaceBook
                </li>
                
            </ul>
        </div>


    </div>
    )
}

export default Footerbar;