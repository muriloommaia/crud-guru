import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { request, setToken } from '../services/requests';
import { RootState } from '../store';
import { setLogged } from '../store/loggedSlice';
import { verifyLogin } from '../utils';

export default function Login() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const isLogged = useSelector((state: RootState) => state.logged.logged);
  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const endpoint = 'login';
      const { token, user } = await request(endpoint, { email, password });
      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setToken(token);
      dispatch(setLogged(true));
      setLogged(true);
    } catch (error) {
      window.alert('usuário ou senha inválidos');
      setEmail('');
      setPassword('');
    }
  };
  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(event.target.value);
    }
  };
  if (isLogged) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="h-screen font-sans login bg-cover bg-indigo-700">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white text-center text-lg font-bold">LOGIN</p>
              <div className="">
                <label className="block text-sm text-white" htmlFor="email">
                  E-mail
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite o e-mail"
                    aria-label="email"
                    onChange={eventHandler}
                    value={email}
                    required
                  />
                </label>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white" htmlFor="password">
                  Senha
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={eventHandler}
                    placeholder="Digite a sua senha"
                    arial-label="password"
                    required
                  />
                </label>
              </div>

              <div className="mt-4 items-center flex justify-between">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-green-900 hover:bg-green-800 rounded disabled:opacity-60"
                  type="submit"
                  disabled={verifyLogin(email, password)}
                  onClick={(e) => login(e)}
                >
                  Entrar

                </button>
                <Link to="/register">
                  <div
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  >
                    Registrar

                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/home" className="text-white text-sm">
                  <div
                    className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
                  >
                    Ir para a home sem login
                  </div>
                </Link>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
