import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginModal } from './components/modales/LoginModal/LoginModal';
import { NavBar } from './components/Navbar/NavBar';
import { ClubIdentity } from './components/ClubIdentity/ClubIdentity';
import { NotFoundPage } from './services/utils/NotFoundPage';
import { Person } from './components/Person/Person';
import SignupModal from './components/modales/SignupModal/SignupModal';
import EventsPage from './pages/Events/EventsPage';
import HomePage from './pages/Home/Home';
import { FooterDown } from './components/FooterDown/FooterDown';
import { NewsPage } from './pages/News/NewsPage';
import { NewDetailsPage } from './pages/News/NewDetailsPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import EventDetailsPage from './pages/Events/EventDetailsPage';
import { PlayersPage } from './pages/Players/PlayersPage';
import { CalendarPage } from './pages/Calendar/CalendarPage';
import { AdminPrivateRoute } from './services/utils/AdminPrivateRoute';

interface dataUser {
  id: string,
  role: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  avatar: string,
  refresToken: string
}

function App() {
  //userData
  const [userData, setUserData] = useState<dataUser>();

  //function to redefine userData
  function handleUserData(data: dataUser): void {
    setUserData({ ...data });
  }

  return (
    <>
      <header className='bg-custom-15616D'>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center'>
          <ClubIdentity />
          <div className='flex flex-col gap-4 items-end sm:flex-row sm:items-center sm:justify-end'>
            {(userData?.role === "ADMIN" || userData?.role === "PLAYER" || userData?.role === "SUPPORTER") ? <Person avatar={userData && userData.avatar ? userData.avatar : "/avatar_default.jpg"} firstname={userData?.firstname ? userData.firstname : "John"} lastname={userData?.lastname ? userData.lastname : "Doe"} role={userData?.role} /> : <SignupModal />}
            <LoginModal handleUserData={handleUserData} /* redifineUserRole={redifineUserRole} */ />
          </div>
        </div>
        <NavBar userRole={userData ? userData.role : "visiteur"} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/actualités' element={<NewsPage />} />
          <Route path='/actualités/detail/:idNew' element={<NewDetailsPage />} />
          <Route path='/évènements' element={<EventsPage />} />
          <Route path='/évènements/detail/:idEvent' element={<EventDetailsPage />} />
          <Route path='/joueurs' element={<PlayersPage />} />
          <Route path='/calendrier' element={<CalendarPage />} />

          <Route element={<AdminPrivateRoute userRole={userData?.role}/>}>
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
          
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer >
        <FooterDown />
      </footer>
    </>
  )
}

export default App