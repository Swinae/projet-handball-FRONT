import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { ClubBanners } from './components/ClubBanners/ClubBanners';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';

interface dataUser{
  id:string,
  role:string,
  firstname:string,
  lastname:string,
  email:string,
  password:string,
  avatar:string, 
}

function App() {
  const [userRole, setUserRole] = useState<string>("");

  //function to get userRole
  function handleRole(role: string): void {
    setUserRole(role);
  }

  //userDataFromServer
  const [userDataFromServer, setUserDataFromServer] = useState<dataUser>();

  //function to redefine userDataFromServer
  function handleUserDataFromServer(userDataFromServer:dataUser):void{
    setUserDataFromServer(userDataFromServer);
  }

  return (
    <>
      <header>
        <div className='div-up'>
          <ClubIdentity />
          <div className='div-user-login'>
            { (userRole === "admin" || userRole === "joueur" || userRole === "supporter")&&<Person avatar={userDataFromServer?.avatar} firstname={userDataFromServer?.firstname} lastname={userDataFromServer?.lastname} role={userDataFromServer?.role} />}
            <LoginModal handleRole={handleRole} handleUserDataFromServer={handleUserDataFromServer} />
          </div>
        </div>
        <NavBar userRole={userRole} />
        <ClubBanners />
      </header>

      <Routes>
        <Route path='/' element />
        <Route path='/news' element />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App