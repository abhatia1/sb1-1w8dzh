import React from 'react';

interface TableHeaderProps {
  title: string;
  onAddNew: () => void;
  buttonText: string;
}

export function TableHeader({ title, onAddNew, buttonText }: TableHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <button
        onClick={onAddNew}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        + {buttonText}
      </button>
    </div>
  );
}