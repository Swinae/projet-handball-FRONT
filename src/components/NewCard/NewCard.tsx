import { Card } from 'flowbite-react';
import { NewData } from '../../services/interfaces/NewData';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NewCardProps {
  NewsList?: NewData[];
}

export function NewCard(props: NewCardProps) {
  // recover properties
  const { NewsList } = props;

  return (
    <div className='grid grid-cols-3 my-12 gap-12'>
      {NewsList && NewsList.map((itemNew) => (
        <Card
          key={itemNew.id}
          className="max-w-sm mx-auto"
          imgAlt={`image reflétant le titre: ${itemNew.title} de l'actualité`} 
          imgSrc={itemNew.img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {itemNew.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {itemNew.description}
          </p>
          <button className='w-1/4 text-center bg-custom-287581 text-white rounded-md px-auto' type='button'>Détails<FontAwesomeIcon className='ml-2' icon={faArrowRight}/></button>
        </Card>
      ))}
    </div>
  );
}
