import Head from 'next/head';
import TodoList from '@/components/ToDoList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <TodoList />
      
    </div>
  );
}
