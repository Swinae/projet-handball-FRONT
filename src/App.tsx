import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';
import SignupModal from './components/modales/SignupModal/SignupModal';
import EventsPage from './pages/Events/Events';
import HomePage from './pages/Home/Home';
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

  //userData
  const [userData, setUserData] = useState<dataUser>();

  //function to redefine userData
  function handleUserData(data:dataUser):void{
    setUserData(data);
  }

  return (
    <>
      <header className='bg-custom-15616D'>
        <div className='flex justify-between items-center'>
          <ClubIdentity />
          <div className='flex gap-4'>
            { (userRole === "admin" || userRole === "joueur" || userRole === "supporter")?<Person avatar={userData?.avatar} firstname={userData?.firstname} lastname={userData?.lastname} role={userData?.role} />:<SignupModal/>}
            <LoginModal handleUserData={handleUserData} redifineUserRole={redifineUserRole} />
          </div>
        </div>
        <NavBar userRole={userRole} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/actualités' element={<NewsPage/>} />
          <Route path='/actualités/detail/:idNew' element={<NewDetailsPage/>} />
          <Route path='/évènements' element={<EventsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <footer >
        <FooterDown/>
      </footer>
    </>
  )
}

export default App