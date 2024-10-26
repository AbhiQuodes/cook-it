import React from 'react'
import './Errorhandle.css'
const Errorhandle=((props)=>{
    return(
        <div className='errorCode'>
         <div className='errorCode'>
              <img className='oppsLogo' src="https://thumbs.dreamstime.com/b/oops-emoticon-vector-illustration-over-white-56744303.jpg"></img>
                <h3 className='errorTitle'> {props.data}</h3> 
                </div>
        </div>
    )
})
export default Errorhandle;