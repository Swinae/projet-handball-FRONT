import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';
import SignupModal from './components/modales/SignupModal/SignupModal';
import HomePage from './pages/Home/Home';
import EventsPage from './pages/Events/Events';

interface dataUser {
  id: string,
  role: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  avatar: string,
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
  function handleUserDataFromServer(userDataFromServer: dataUser): void {
    setUserDataFromServer(userDataFromServer);
  }

  return (
    <>
      <header className='bg-custom-15616D'>
        <div className='flex justify-between items-center'>
          <ClubIdentity />
          <div className='flex gap-4'>
            <SignupModal />
            {(userRole === "admin" || userRole === "joueur" || userRole === "supporter") && <Person avatar={userDataFromServer?.avatar} firstname={userDataFromServer?.firstname} lastname={userDataFromServer?.lastname} role={userDataFromServer?.role} />}
            <LoginModal handleRole={handleRole} handleUserDataFromServer={handleUserDataFromServer} />
          </div>
        </div>
        <NavBar userRole={userRole} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element />
          <Route path='/évènements' element={<EventsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>

    </>
  )
}

export default App