import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { request } from '../services/requests';
import { verifyRegister } from '../utils';

export default function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [isRegistered, setRegistered] = useState(false);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(event.target.value);
    } else if (name === 'nome') {
      setNome(event.target.value);
    }
  };
  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const endpoint = 'register';
      await request(endpoint, { email, password, name: nome });
      setRegistered(true);
    } catch (error) {
      window.alert('Email já cadastrado');
      setEmail('');
      setNome('');
      setPassword('');
    }
  };
  if (isRegistered) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen login bg-cover bg-violet-900">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-10 rounded-lg shadow-xl pb-5">
              <p className="text-white text-center text-lg font-bold">CADASTRO</p>
              <div className="">
                <label className="block text-sm text-white" htmlFor="email">
                  E-mail
                  <input
                    className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
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
                <label className="block text-sm text-white my-3" htmlFor="nome">
                  Nome
                  <input
                    className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="nome"
                    id="nome"
                    name="nome"
                    placeholder="Digite o e-mail"
                    aria-label="nome"
                    onChange={eventHandler}
                    value={nome}
                    required
                  />
                </label>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white" htmlFor="password">
                  Senha
                  <input
                    className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
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

              <div className="mt-4 mb-6 items-center flex justify-between font-medium">
                <button
                  className="px-6 border-green-300 border-2 py-1 text-white  tracking-wider bg-green-500 hover:bg-green-700 rounded disabled:opacity-80"
                  type="button"
                  disabled={verifyRegister(email, password, nome)}
                  onClick={(e) => register(e)}
                >
                  Register

                </button>
              </div>
              <div className="text-center">
                <Link to="/home" className="text-white text-sm">
                  <div
                    className="inline-block right-0 align-baseline font-light text-base text-500 hover:text-red-400"
                  >
                    Retornar para Home
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
