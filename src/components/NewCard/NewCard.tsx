import './NewCard.css';
import { Card } from 'flowbite-react';
import { NewData } from '../../services/interfaces/NewData';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

interface NewCardProps {
  NewsList?: NewData[];
}

export function NewCard(props: NewCardProps) {
  // recover properties
  const { NewsList } = props;

  const navigate=useNavigate();

  //function redirect to new detail page
  const handleRedirection=(id:string)=>{
    console.log("j'ai cliqué sur une actualité avec l'id: ", id);
    navigate(`/actualités/detail/${id}`);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-y-8 gap-x-8'>
      {NewsList &&[...NewsList].reverse().map((itemNew) => (
        <Card
          key={itemNew.id}
          className='w-full'
          imgAlt={`image reflétant le titre: ${itemNew.title} de l'actualité`} 
          imgSrc={itemNew.img?itemNew.img:"/img_actu_defaut.jpg"}
        >
          <h5 className='"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {itemNew.title}
          </h5>
          <p>
            {itemNew.content}
          </p>
          <button className='flex w-28 justify-center items-center bg-custom-287581 text-white rounded-md' type='button' onClick={()=>{handleRedirection(itemNew.id)}}>Détails<FontAwesomeIcon className='ml-2' icon={faArrowRight}/></button>
        </Card>
      ))}
    </div>
  );
}
