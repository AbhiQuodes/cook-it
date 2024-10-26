import React ,{useEffect, useState} from 'react'
import './Mealcard.css'
import './Searchtool.css'
import Errorhandle from './Errorhandle'
import { NavLink} from 'react-router-dom'
const Mealcards=({mealDetails})=>{
    
   
    return (
        <div className="Meal-container">
    
        { (!mealDetails  )  ?
        
""        :  (mealDetails =='no-data-found')  ?     <Errorhandle data="Data Not Found !!!"></Errorhandle>  :
           mealDetails.map((meal_item ,idx)=>{
                
                return (
                    <div className='food-card'>
                 
                <img className='food-image'  src={meal_item.strMealThumb}></img>
                <h3 className ='food-title'>
               { meal_item.strMeal}
                </h3>
                <p className='food-details' >
                { meal_item.strTags}
                </p>
             <NavLink style ={{textDecoration:'none'}}  to={`/${meal_item.idMeal}`}><button >Get Recipe</button> 
             </NavLink> 
                    </div>
                
                
            )
            
            
        })

        
        
            

    
        

        
        
    
    
    
        }
        </div>
    )
}
export default Mealcards;