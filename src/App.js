
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonajePage from './pages/PersonajePage';
import CronologiaPage from './pages/CronologiaPage';
import LoginPage from './pages/LoginPage';
import MundoPage from './pages/MundoPage';
import SinglePersonajePage from './pages/SinglePersonajePage';
import SingleMundoPage from './pages/SingleMundoPage';
import SingleCronologiaPage from './pages/SingleCronologiaPage';
import ProfilePage from './pages/ProfilePages';
import { useSelector } from 'react-redux';
import NuevaCronolgoiaPage from './pages/NuevaCronolgoiaPage';

function App() {
  const {user} = useSelector((state)=>state.AuthReducer )

  return (
    <div className="App">
<NavigationComponent></NavigationComponent>


<Routes>
    {/* perimreas rutas */}
  <Route exact path="/" element ={<HomePage/>}></Route> 
  <Route exact path="/personaje" element={<PersonajePage/>}></Route> 
  <Route exact path="/mundos" element={<MundoPage/>} ></Route> 
  <Route exact path="/cronologia" element={<CronologiaPage/>}></Route> 
  <Route exact path="/login" element={<LoginPage/>}></Route> 
 {/* segundas rutas */}
 <Route exact path="/personajes/:id" element={<SinglePersonajePage/>} ></Route> 
 <Route exact path="/mundos/:id" element={<SingleMundoPage/>} ></Route> 
 <Route exact path="/cronologias/:id" element={<SingleCronologiaPage/>} ></Route> 
 {/* login rutas */}
 <Route exact path="/profile" element={user && user.id?<ProfilePage/>: <Navigate to="/login" replace></Navigate>} ></Route>
    
   {/* agrgar/quitar cronologias */}
   <Route exact path="/nuevacronologia" element ={<NuevaCronolgoiaPage/>}></Route> 

    </Routes>

    </div>
  );
}

export default App;
