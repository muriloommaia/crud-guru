import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/filterSlice';
import { setPage } from '../store/pageSlice';

export default function InputFilter() {
  const dispatch = useDispatch();
  const { filter: { filter }, totalUsers: { total } } = useSelector((state: RootState) => state);
  const eventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
    dispatch(setPage(1));
  };
  return (
    <div className="flex w-11/12 items-center justify-between mb-4">
      <div className="text-stone-50 flex">
        <p className="">
          <i className="fa-solid fa-users" />
        </p>
        <p className="mx-2">
          {total}
          {' '}
          resultados
        </p>
      </div>
      <div className="bg-grey col-12 align-middle justify-content-center flex items-center col-8 border-2 p-2 rounded-xl text-center bg-slate-50">
        <input type="search" className=" focus:outline-none" placeholder="Pesquisar nome ou email" id="search-filter" name="filter" onChange={eventChange} value={filter} />
        <i className="fa-solid fa-magnifying-glass" />
      </div>

    </div>
  );
}
