import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { setLogged } from '../store/loggedSlice';
import logo from '../images/meuguru.svg';

export default function Header() {
  const isLogged = useSelector((state: RootState) => state.logged.logged);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('user');
    dispatch(setLogged(false));
  };
  return (
    <nav className="flex items-center flex-col justify-between flex-wrap px-5 sm:flex-row">
      <div className="flex items-center mr-0 mb-4 mt-2 flex-shrink-0 text-white sm:mr-6">
        <a href="https://www.meuguru.net/">
          <img src={logo} alt="logo" className="" />
        </a>
      </div>
      <div className="font-bold flex-wrap flex text-stone-50 text-center text-2xl">
        Teste Prático
      </div>
      { isLogged ? (
        <div className="flex">

          <Link
            to="/edit/profile"
            className="transition duration-200 ease-in block bg-green-500 border-violet-800 border-2 rounded-full m-4 px-4 py-2 text-slate-50 font-semibold hover:bg-green-700"
          >
            Editar Perfil
          </Link>
          <button
            type="button"
            className="transition duration-200 ease-in block text-white bg-red-700 hover:bg-red-900  border-violet-800 border-2 rounded-full my-4 px-4 py-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/register" className=" text-white mr-5 hover:font-medium">
            Registrar
          </Link>
          <Link to="/login" className="transition duration-200 ease-in block bg-green-500 border-violet-800 border-2 rounded-full my-4 px-7 py-2 text-white font-bold hover:bg-green-700 ">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
