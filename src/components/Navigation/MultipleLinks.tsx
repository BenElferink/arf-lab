import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';
import SingleLink, { SingleLinkProps } from './SingleLink';

export interface MultipleLinksProps {
  title: string;
  links: SingleLinkProps[];
  dropdownState: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  };
}

const MultipleLinks = (props: MultipleLinksProps) => {
  const { title, links, dropdownState } = props;
  const open = dropdownState.value === title;

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() =>
          dropdownState.setValue((prev) => {
            if (prev === title) return '';
            return title;
          })
        }
        className={
          (open ? 'bg-gray-800 lg:bg-transparent lg:text-white ' : '') +
          'py-2 px-3 lg:p-0 w-full lg:w-auto flex items-center text-start lg:text-center text-sm truncate rounded lg:border-0 hover:bg-gray-700 lg:hover:bg-transparent hover:text-white'
        }
      >
        {title}
        <ChevronDownIcon className={(open ? 'rotate-180' : 'rotate-0') + ' ml-1 w-4 h-4'} />
      </button>

      <div className={open ? 'block' : 'hidden'}>
        <ul
          onClick={() => dropdownState.setValue('')}
          className='lg:flex lg:flex-col lg:items-start lg:absolute lg:top-12 lg:-left-4 lg:overflow-auto lg:w-fit lg:p-4 lg:bg-gray-900 lg:border-gray-700 lg:rounded-xl'
        >
          {links.map((obj) => (
            <li key={`link-group-${title}-item-${obj.label}`} className='lg:py-1 bg-gray-800 lg:bg-transparent rounded'>
              <SingleLink {...obj} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleLinks;
