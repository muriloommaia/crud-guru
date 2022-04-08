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
        className={`bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded-l ${page === 1 ? 'disabled:opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
        type="button"
        onClick={() => pagination(-1)}

      >
        Prev
      </button>
      <div className="flex items-center justify-center p-3 rounded-full bg-slate-200 text-xl h-10 w-10">
        <p className="m-0">
          {page}
        </p>
      </div>
      <button
        className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r ${page === Math.ceil(total / 8) ? 'disabled:opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
        type="button"
        onClick={() => pagination(1)}
      >
        Next
      </button>
    </div>
  );
}
