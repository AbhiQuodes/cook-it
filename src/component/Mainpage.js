import React,{useState} from 'react'
import './Mainpage.css'
import Searchtool from './Searchtool'
import Headerbar from './Headerbar'
import Mealcards from './Mealcards'
import Footerbar from './Footerbar.js'

const Mainpage=()=>{
//   const get_details=()=>{
    const [ getDetailsData, setGetDetails_data]=useState();

    //callback function to receive data from the child searchtool and then passing it to child Mealcards.
    const  handleGetData=(data)=>{
   
        setGetDetails_data(data); // update state with  data from searchtool


        
  }
    return(
        <div>

        <Headerbar></Headerbar>
       <Searchtool sendDataToParent={handleGetData}></Searchtool>
       <Mealcards  mealDetails={getDetailsData}></Mealcards>
       <Footerbar></Footerbar>
        </div>
    )
}

export default Mainpage