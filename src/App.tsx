import './App.css'
import Board from './components/Board'
import { useEffect, useState } from 'react';
import AddCardForm from './components/ui/form/AddCardForm';
import Modal from './components/ui/modal/Modal';
import { CardInfo } from './components/Card';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    const items = localStorage.getItem('tasks');
    if (items) {
      setCards(JSON.parse(items));
    }
  }, []);

  const handleAddCard = (values: { title: string; category: string; dueDate: string; column: string }) => {
    const newCard = {
      id: Date.now(),
      text: values.title,
      column: values.column,
      category: values.category,
      dueDate: values.dueDate
    }
    localStorage.setItem('tasks', JSON.stringify([...cards, newCard]));
    setCards([...cards, newCard]);
    setIsOpen(false);
  }

  return (
    <div className='max-w-5xl h-screen mx-auto flex flex-col justify-center'>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-2xl font-bold'>Task Manager</p>
        <button className=' bg-slate-600 text-white py-2 px-4 rounded-md' onClick={() => setIsOpen(true)}>Add Card</button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddCardForm onSubmit={handleAddCard}  />
      </Modal>
      <Board cards={cards} setCards={setCards} />
    </div>
  )
}

export default App
