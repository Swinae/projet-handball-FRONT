import './App.css'
import {Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import {ClubBanners} from './components/ClubBanners/ClubBanners';
import { NotFoundPage } from './services/utils/NotFoundPage';

function App() {
  const [userRole, setUserRole]=useState<string>("");

  //function to get userRole in localstorage send by server
  function handleRole():void{
    setUserRole("admin");
  }

  return (
    <>
      <header>
        <div className='div-up'>
          <ClubIdentity/>
          <LoginModal handleRole={handleRole} />
        </div>
        <NavBar userRole={userRole}/>
        <ClubBanners/>
      </header>

      <Routes>
        <Route path='/' element/>
        <Route path='/news' element/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App