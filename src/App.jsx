
import Home from './components/Home'
import LoginPage from './components/LoginPagae'
import Services from  './components/Services'
import About from './components/About';
import {BrowserRouter as Router , Routes , Route, NavLink} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent';
import StateComponent from './components/StateComponent';
import StateComponentArray from './components/StateComponentArray';


import './App.css'
import ProductComponent from './components/ProductComponent';
import Forms from './components/Forms';
import FormikandYup from './components/FormikandYup';

function App() {

  let login  = true;

  return (


    <>

    
    <Router>
      <NavbarComponent/>
       <Routes>
        <Route path='/Home' element={login ? <div className='flex justify-center items-center'>
        <Home 
            name="Monkey D. Luffy" 
            designation="Captain of the Straw Hat Pirates" 
            imgSrc="https://avatarfiles.alphacoders.com/344/344704.png" 
            info="Cheerful, determined, values freedom, and is extremely loyal to his crew."
        />
        <Home 
            name="Roronoa Zoro" 
            designation="Swordsman" 
            imgSrc="https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/a03c2ec6-ba87-4d28-e9d2-cc89ef0d8500/banner"
            info="Stoic, strong sense of honor, and dedicated to Luffy's cause." 
        />
        <Home 
            name="Nami" 
            designation="Navigator" 
            imgSrc="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/one-piece-nami-featured.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5" 
            info="Smart, resourceful, and has a love for money and treasure."
        />
        <Home 
            name="Usopp" 
            designation="Sniper" 
            imgSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec719f46-44d6-4593-ab1e-952b01909a4e/d6k1hld-e163b7d0-e34a-4414-bd2e-2047de4dc169.png/v1/fit/w_828,h_734/one_piece___sniper_usopp_by_sergiart_d6k1hld-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4NiIsInBhdGgiOiJcL2ZcL2VjNzE5ZjQ2LTQ0ZDYtNDU5My1hYjFlLTk1MmIwMTkwOWE0ZVwvZDZrMWhsZC1lMTYzYjdkMC1lMzRhLTQ0MTQtYmQyZS0yMDQ3ZGU0ZGMxNjkucG5nIiwid2lkdGgiOiI8PTE0NTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2MuiSrRt7usJtF-IKXQmw2mOMR87aUaMiBtZSYDiyzo"
            // info="Cowardly at times but incredibly brave when it matters."
             />
        <Home 
            name="Sanji" 
            designation="Cook" 
            imgSrc="https://avatarfiles.alphacoders.com/328/328688.jpg"
            info="A gentleman with a deep respect for women and an obsession with cooking." />
            
  
      </div> : <LoginPage/>}/>
         <Route path='/Services' element={<Services/>}/> 
        <Route path='/About' element={<About/>}/>       
        <Route path='/StateComponent' element={<StateComponent/>}/>  
        <Route path='/StateComponentArray' element={<StateComponentArray/>}/>  
        <Route path='/ProductComponent' element={<ProductComponent/>}/> 
        <Route path='/Forms' element={<Forms/>}/>
        <Route path='/FormikandYup' element={<FormikandYup/>}/>  
 
           

       </Routes>
    </Router>
      
    </>
  )
}

export default App;
