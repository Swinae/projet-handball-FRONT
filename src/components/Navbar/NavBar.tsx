import { NavLink } from 'react-router-dom';
import './NavBar.css';

type PropsNavbar = {
  userRole: string;
}

export function NavBar(props:PropsNavbar) {
  const{userRole}=props;
  console.log(userRole);
  
  return (
    <>
      <nav className='bg-custom-287581 text-white nav-features'>
        <NavLink to="/actualités" className={({ isActive }) => (isActive ? "active" : undefined)}>Actualités</NavLink>
        <NavLink to="/évènements" className={({ isActive }) => (isActive ? "active" : undefined)}>Evènements</NavLink>
        <NavLink to="/résultats-des-matchs" className={({ isActive }) => (isActive ? "active" : undefined)}>Résultats des matchs</NavLink>
        {(userRole === "admin" || userRole === "supporter" || userRole === "joueur") && <NavLink to="/calendrier" className={({ isActive }) => (isActive ? "active" : undefined)}>Calendrier</NavLink>}
        {(userRole === "admin" || userRole === "supporter" || userRole === "joueur") && <NavLink to="/profil-des-joueurs" className={({ isActive }) => (isActive ? "active" : undefined)}>Profil des joueurs</NavLink>}
        {userRole === "admin" && <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : undefined)}>Tableau de bord</NavLink>}
      </nav>
    </>
  )
}