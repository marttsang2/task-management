import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd'
import Column from './Column';
import { CardInfo } from './Card';

type BoardProps = {
    cards: CardInfo[];
    setCards: React.Dispatch<React.SetStateAction<CardInfo[]>>;
};

function Board({ cards, setCards }: BoardProps) {

  const moveCard = (id: number, column: string) => {
    const updatedCards = cards.map(card => 
      card.id === id ? { ...card, column } : card
    );
    localStorage.setItem('tasks', JSON.stringify(updatedCards));
    setCards(updatedCards);
  };

  const removeCard = (id: number) => {
    const updatedCards = cards.filter(card => card.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedCards));
    setCards(updatedCards);
  }

  const columns = ['To-Do', 'In Progress', 'Done'];
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='max-w-5xl mx-auto flex justify-between gap-4'>
        {columns.map(col => (
          <Column 
            key={col}
            title={col} 
            cards={cards.filter(card => card.column === col)}
            onDropCard={moveCard}
            removeCard={removeCard}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default Board;
