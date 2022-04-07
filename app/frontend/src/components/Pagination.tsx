import React from 'react';

export default function Pagination() {
  return (
    <div className="flex justify-around">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        type="button"
      >
        Prev
      </button>
      <div>
        Número
      </div>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        type="button"
      >
        Next
      </button>
    </div>
  );
}
