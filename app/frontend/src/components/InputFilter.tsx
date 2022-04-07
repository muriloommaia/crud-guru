import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/filterSlice';
import { setPage } from '../store/pageSlice';

export default function InputFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.filter);
  const eventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
    dispatch(setPage(1));
  };
  return (
    <div className="bg-grey col-12 mt-3 align-middle justify-content-center flex">
      <input type="text" className="col-8 border-2 p-2" placeholder="Search for name or email" id="search-filter" name="filter" onChange={eventChange} value={filter} />
    </div>
  );
}
