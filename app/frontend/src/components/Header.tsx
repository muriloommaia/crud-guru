import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { setLogged } from '../store/loggedSlice';

export default function Header() {
  const isLogged = useSelector((state: RootState) => state.logged.logged);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('user');
    dispatch(setLogged(false));
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-violet-900">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="./images/meuguru.svg" alt="logo" className="w-8" />
      </div>
      { isLogged ? (
        <div className="flex">

          <Link to="/edit/profile" className="block text-white bg-violet-600 border-violet-800 border-2 rounded-full my-4 px-4 py-2">
            Editar Perfil
          </Link>
          <button
            type="button"
            className="block text-white bg-red-900 border-violet-800 border-2 rounded-full my-4 px-4 py-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex">

          <Link to="/login" className="block text-white bg-green-600 border-violet-800 border-2 rounded-full my-4 px-4 py-2">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
