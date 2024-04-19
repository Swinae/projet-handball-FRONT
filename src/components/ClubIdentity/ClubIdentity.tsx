import { NavLink } from 'react-router-dom';
import './ClubIdentity.css';

export function ClubIdentity(){
  return(
    <div className="club-identity">
      <NavLink to={'/'}><img src="/logoClub.png" alt="logo du club"/></NavLink>
      <h1 className='text-white text-base md:text-2xl'>NIGHT'S WATCH HANDBALL</h1>
    </div>
  )
}