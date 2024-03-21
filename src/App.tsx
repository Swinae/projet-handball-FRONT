import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { ClubBanners } from './components/ClubBanners/ClubBanners';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';
import SignupModal from './components/modales/SignupModal/SignupModal';
import { FooterDivider } from 'flowbite-react';
import { FooterDown } from './components/FooterDown/FooterDown';

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

  //userDataFromServer
  const [userDataFromServer, setUserDataFromServer] = useState<dataUser>();

  //function to redefine userDataFromServer
  function handleUserDataFromServer(userDataFromServer:dataUser):void{
    setUserDataFromServer(userDataFromServer);

    //redefine role in state userRole
    setUserRole(userDataFromServer.role)
  }

  return (
    <>
      <header className='bg-custom-15616D'>
        <div className='flex justify-between items-center'>
          <ClubIdentity />
          <div className='flex gap-4'>
            <SignupModal />
            { (userRole === "admin" || userRole === "joueur" || userRole === "supporter")&&<Person avatar={userDataFromServer?.avatar} firstname={userDataFromServer?.firstname} lastname={userDataFromServer?.lastname} role={userDataFromServer?.role} />}
            <LoginModal handleUserDataFromServer={handleUserDataFromServer} />
          </div>
        </div>
        <NavBar userRole={userRole} />
        <ClubBanners />
      </header>

      <main>
        <Routes>
          <Route path='/' element />
          <Route path='/actualités' element />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <FooterDown/>
      </footer>
    </>
  )
}

export default App