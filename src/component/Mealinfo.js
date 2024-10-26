import React,{useState, useEffect} from 'react'
import './Mealinfo.css'
import './Searchtool.css'
import Headerbar from './Headerbar'
import Footerbar from './Footerbar'
import {useParams} from 'react-router-dom'
import {Audio} from 'react-loader-spinner';
const Mealinfo = () =>{
    const [loader2,setLoader2]=useState(false);
    // const [loading,setLoading] = useState(false);
    // let count = true;

    const {mealid} = useParams();
    // start is  time when the page is loaded first time . (!info ) is true and data not appears on screen
    const [info,setInfo] = useState();
    
    window.scrollTo({ top: '100vh' , behaviour : "smooth"})
    
    useEffect(() => {
      const getInfo =async()=>{
        setLoader2(true);
        // setLoading(true);  

        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const json_Data= await get.json();
        if(json_Data.meals!=null && json_Data.meals !="Invalid ID")
        {
            setInfo(json_Data.meals[0]);
          }
          else{
            setInfo('');


        }

      
        setLoader2(false);
        //to make the scroll height of the Meal info page  sets at begin
    }


    if(info !="" )//&& count )
    {
       // count=false;
        getInfo();
    }
  }, []);


//   useEffect(()=>{

//   },[info])
      
    
    return (
        <div >

        {
            (!info ) ?     ( !loader2 ?  <div className ="errorCode" ><img className="oppsLogo"src="https://thumbs.dreamstime.com/b/oops-emoticon-vector-illustration-over-white-56744303.jpg"></img>
        <h2>Data Not Found !!!</h2> </div>:
                <div className='loaderUI'><Audio
                        height="60"
                        width="80"
                        radius="9"
                        display="block"
                        color="black"
                        ariaLabel="loading"
                        margin="auto"
                        wrapperStyle
                        wrapperClass  />  
                        
                          </div>   )      :
            <div>
                    <Headerbar></Headerbar>


            <div className="food_details">
            <img className="food-img" src={info.strMealThumb}/>
            <div className='food-text'>
            <h1>Recipe Detail</h1>
            <button className="food-button">{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
            </div>
            </div>
                 <Footerbar></Footerbar>
            </div>

        }
        </div>
    )
}

export default Mealinfo;
