import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setPage } from '../store/pageSlice';

export default function Pagination() {
  const { actualPage: { page }, totalUsers: { total } } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const pagination = (count: number) => {
    dispatch(setPage(count + page));
  };
  return (
    <div className="flex justify-around">
      <button
        className={`bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded-lg ${page === 1 ? 'opacity-0 cursor-auto' : 'hover:bg-gray-400'}`}
        disabled={page === 1}
        type="button"
        onClick={() => pagination(-1)}

      >
        Anterior
      </button>
      <div className="flex items-center justify-center p-3 rounded-lg bg-slate-200 text-xl h-10 w-10">
        <p className="m-0">
          {page}
        </p>
      </div>
      <button
        className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg ${page === Math.ceil(total / 8) ? 'opacity-0 cursor-auto' : 'hover:bg-gray-400'}`}
        type="button"
        disabled={page === Math.ceil(total / 8)}
        onClick={() => pagination(1)}
      >
        Próximo
      </button>
    </div>
  );
}
