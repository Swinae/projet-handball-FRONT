import { Avatar } from 'flowbite-react';
import './Person.css';

function UserAvatar({avatar}:any) {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img={avatar} alt="avatar of Jese" rounded />
    </div>
  );
}

export function Person(props:any) {
  const {avatar,firstname,lastname,role}=props;

  return (
    <div className='div-person'>
      <UserAvatar avatar={avatar} />
      <div>
        <p>{firstname.charAt(0).toUpperCase()+firstname.slice(1)+" "+lastname.toUpperCase()}</p>
        <p>{role.charAt(0).toUpperCase()+role.slice(1)}</p>
      </div>
    </div>
  )
}