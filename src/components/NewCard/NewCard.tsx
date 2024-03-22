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
    <div className='grid grid-cols-3 my-12 mx-12'>
      {NewsList && NewsList.map((itemNew) => (
        <Card
          key={itemNew.id}
          className="mx-auto min-w-96 max-w-96 mb-10"
          imgAlt={`image reflétant le titre: ${itemNew.title} de l'actualité`} 
          imgSrc={itemNew.img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {itemNew.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden line-clamp-3">
            {itemNew.description}
          </p>
          <button className='w-1/4 text-center bg-custom-287581 text-white rounded-md px-auto' type='button' onClick={()=>{handleRedirection(itemNew.id)}}>Détails<FontAwesomeIcon className='ml-2' icon={faArrowRight}/></button>
        </Card>
      ))}
    </div>
  );
}
