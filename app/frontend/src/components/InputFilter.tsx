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
    <div className="flex items-center">
      <div className="bg-grey col-12 mt-3 align-middle justify-content-center flex">
        <input type="search" className="col-8 border-2 p-2 rounded-xl text-center" placeholder="Search for name or email" id="search-filter" name="filter" onChange={eventChange} value={filter} />
      </div>
      <div className="text-stone-50">
        <p>
          {total}
          <i className="fa-solid fa-users" />
        </p>
      </div>
    </div>
  );
}
