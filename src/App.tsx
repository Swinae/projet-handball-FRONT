import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';
import SignupModal from './components/modales/SignupModal/SignupModal';
import { FooterDown } from './components/FooterDown/FooterDown';
import { NewsPage } from './pages/News/NewsPage';
import { NewDetailsPage } from './pages/News/NewDetailsPage';

interface dataUser{
  id:string,
  role:string,
  firstname:string,
  lastname:string,
  email:string,
  password:string,
  avatar:string,
  token:string 
}

function App() {
  const [userRole, setUserRole] = useState<string>("");
  
  //function to redifine userRole
  function redifineUserRole(role:string){
    //redefine role in state userRole
    setUserRole(role)
  }

  //userDataFromServer
  const [userDataFromServer, setUserDataFromServer] = useState<dataUser>();

  //function to redefine userDataFromServer
  function handleUserDataFromServer(userDataFromServer:dataUser):void{
    setUserDataFromServer(userDataFromServer);
  }

  return (
    <>
      <header className='bg-custom-15616D'>
        <div className='flex justify-between items-center'>
          <ClubIdentity />
          <div className='flex gap-4'>
            { (userRole === "admin" || userRole === "joueur" || userRole === "supporter")?<Person avatar={userDataFromServer?.avatar} firstname={userDataFromServer?.firstname} lastname={userDataFromServer?.lastname} role={userDataFromServer?.role} />:<SignupModal/>}
            <LoginModal handleUserDataFromServer={handleUserDataFromServer} redifineUserRole={redifineUserRole} />
          </div>
        </div>
        <NavBar userRole={userRole} />
      </header>

      <main>
        <Routes>
          <Route path='/' element />
          <Route path='/actualités' element={<NewsPage/>} />
          <Route path='/actualités/detail/:idNew' element={<NewDetailsPage/>} />
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