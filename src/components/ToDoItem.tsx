import React, { useState } from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    onEdit(id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-2 w-full m-2"
          />
          <button onClick={handleEdit} className="text-blue-500 mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="text-gray-500">Cancel</button>
        </>) 
        : 
        (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
              className="mr-2"
            />
            <span className={completed ? "line-through" : ""}>{text}</span>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">Edit</button>
            <button onClick={() => onDelete(id)} className="text-red-500">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
