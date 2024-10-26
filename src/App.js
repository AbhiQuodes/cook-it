import './App.css';
import Mainpage from './component/Mainpage';
import {Route ,Routes} from 'react-router-dom';
import Mealinfo from './component/Mealinfo';


const App=()=>{

    return(

   //       <Mainpage/>
        <Routes>
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/:mealid' element={<Mealinfo/>}/>
        </Routes>
    )
}

export default App;