import React ,{ useState,useEffect} from 'react'
import { Audio } from 'react-loader-spinner';
import './Searchtool.css'
import Errorhandle from './Errorhandle';


const Searchtool=(props)=>{
// writing first usestate hook
const [data,setData] = useState();
const [inputValue,setInputValue] = useState('');
const [loader,setLoader]=useState(false);
const [noInput ,setNoInput]=useState();


    const updateInputValue=(e)=>{
        setInputValue(e.target.value);
        setNoInput(false);
        props.sendDataToParent('');

        
    }
    const mealApi = async () => {
        if(inputValue)
        {
        setLoader(true);
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
       const josonInfo = await get.json();
      setData(josonInfo.meals);
      if(!josonInfo.meals)
      {
    
        // setData('empty')
        props.sendDataToParent('no-data-found');

      }
      else{

          props.sendDataToParent(josonInfo.meals);
      }
      setLoader(false);
    }
    else{
        setNoInput(true);
        props.sendDataToParent('');

    }

}
  
 
    return(
        <div className='container'>
            <div className ='searchBar'>
                <input type='text' placeholder='Enter Dishe ' onChange={updateInputValue}></input>
                <button onClick={mealApi}>Search</button>

            </div>
            {
                noInput ?  
                <Errorhandle data="     No Input"></Errorhandle>
                
                :""
            }
            { !loader ? '':
            <div className='loaderUI'><Audio
                    height="60"
                    width="80"
                    radius="9"
                    display="block"
                    color="black"
                    ariaLabel="loading"
                    margin="auto"
                    wrapperStyle
                    wrapperClass
          
/>    </div>}
            </div>
    )
}

export default Searchtool;