import { useDrag } from 'react-dnd';

export type CardInfo = {
    id: number;
    text: string;
    column: string;
    category: string;
    dueDate?: string;
}

type CardProps = {
    id: number;
    text: string;
    category: string;
    dueDate?: string;
    removeCard: (id: number) => void;
};

function Card({ id, text, category, dueDate, removeCard }: CardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`relative flex flex-col p-5 rounded-lg ${isDragging ? 'opacity-50' : 'opacity-100'} bg-white my-2`}>
        {text}
        <div className='text-xs text-gray-500 font-semibold'>{category}</div>
        {dueDate && <div className='text-xs text-gray-500 font-semibold'>Due Date: {dueDate}</div>}
        <button className='absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-xs text-red-500 font-semibold' onClick={() => removeCard(id)}>
            <i className="gg-close"></i>
        </button>
    </div>
  );
}

export default Card;
