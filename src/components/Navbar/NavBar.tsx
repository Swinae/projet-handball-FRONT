import { NavLink } from 'react-router-dom';
import './NavBar.css';

type PropsNavbar = {
  userRole: string;
}

export function NavBar(props: PropsNavbar) {
  const { userRole } = props;

  return (
    <>
      <nav className='bg-custom-287581 text-white nav-features grid grid-cols-1 md:flex'>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>Accueil</NavLink>
        <NavLink to="/actualités" className={({ isActive }) => (isActive ? "active cy-navlink-actualites" : "cy-navlink-actualites")}>Actualités</NavLink>
        <NavLink to="/évènements" className={({ isActive }) => (isActive ? "active" : undefined)}>Evènements</NavLink>
        <NavLink to="/résultats-des-matchs" className={({ isActive }) => (isActive ? "active" : undefined)}>Résultats des matchs</NavLink>
        <NavLink to="/calendrier" className={({ isActive }) => (isActive ? "active" : undefined)}>Calendrier</NavLink>
        {(userRole === "ADMIN" || userRole === "SUPPORTER") && <NavLink to="/joueurs" className={({ isActive }) => (isActive ? "active" : undefined)}>Profil des joueurs</NavLink>}
        {(userRole === "SUPPORTER" || userRole === "ADMIN" || userRole === "PLAYER") && <NavLink to="/profil" className={({ isActive }) => (isActive ? "active" : undefined)}>Mon Profil</NavLink>}
        {userRole === "ADMIN" && <NavLink to="/dashboard" id='dashboard-navbar' className={({ isActive }) => (isActive ? "active" : undefined)}>Tableau de bord</NavLink>}
      </nav>
    </>
  )
}