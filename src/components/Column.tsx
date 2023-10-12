import { useDrop } from 'react-dnd';
import Card from './Card';

type ColumnProps = {
    title: string;
    cards: { id: number; text: string; column: string, category: string }[];
    onDropCard: (id: number, column: string) => void;
    removeCard: (id: number) => void;
};

function Column({ title, cards, onDropCard, removeCard }: ColumnProps) {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item: { id: number }) => onDropCard(item.id, title),
  });

  return (
    <div ref={drop} className='w-[400px] h-[600px] bg-gray-200 rounded-md pb-4 px-4 overflow-auto'>
      <h2 className='sticky top-0 mb-2 text-lg font-bold z-10 bg-gray-200 py-4'>{title}</h2>
      {cards.length === 0 && <p className='text-gray-500 text-center'>No cards in this column</p>}
      {cards.length > 0 && cards.map(card => <Card key={card.id} {...card} removeCard={removeCard} />)}
    </div>
  );
}

export default Column;
