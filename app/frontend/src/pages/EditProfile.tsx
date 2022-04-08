import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { requestDelete, requestHeader } from '../services/requests';
import { setLogged } from '../store/loggedSlice';
import { UserRender } from '../Types/UserTypes';
import { verifyChange } from '../utils';

export default function EditProfile() {
  const [user, setUser] = React.useState<UserRender>();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch();
  const getUser = () => {
    const response = localStorage.getItem('user') as string;
    const responseJSON = JSON.parse(response) as UserRender;
    setUser(responseJSON);
    setEmail(responseJSON.email);
    setName(responseJSON.name);
  };
  useEffect(() => {
    document.title = 'EditProfile';
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const buttonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const endpoint = `${user?.id}/update`;
      const token = user?.token as string;
      const userResponse = await requestHeader(endpoint, { email, name }, token);
      localStorage.setItem('user', JSON.stringify({ ...user, ...userResponse }));
      setEdit(true);
    } catch (error) {
      window.alert('Email existente');
    }
  };

  const removeUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const endpoint = `${user?.id}/delete`;
      const token = user?.token as string;
      await requestDelete(endpoint, token);
      localStorage.removeItem('user');
      dispatch(setLogged(false));
      setEdit(true);
    } catch (error) {
      window.alert('Email existente');
    }
  };

  if (edit) return <Navigate to="/home" />;
  return (
    <div className="h-screen login bg-cover bg-violet-900">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg justify-center">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-10 rounded-lg shadow-xl pb-5">
              <p className="text-white text-center text-lg font-bold">EDITAR PERFIL</p>
              <div className="">
                <label className="block text-sm text-white" htmlFor="email">
                  E-mail
                  <input
                    className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={user?.email}
                    aria-label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={email}
                    required
                  />
                </label>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white" htmlFor="name">
                  Nome
                  <input
                    className="w-full px-5 py-2 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="name"
                    id="name"
                    name="name"
                    placeholder={user?.name}
                    defaultValue={name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    arial-label="name"
                    required
                  />
                </label>
              </div>

              <div className="mt-4 mb-6 items-center flex justify-between">
                <button
                  className="px-6 border-green-300 border-2 py-1 text-white  tracking-wider bg-green-500 hover:bg-green-700 rounded disabled:opacity-80"
                  type="button"
                  disabled={verifyChange(email, name)}
                  onClick={(e) => buttonClick(e)}
                >
                  Alterar
                </button>
                <button
                  className="px-4 py-1 text-white font-light tracking-wider disabled:opacity-70 bg-red-600 hover:bg-red-800 border-2 border-red-400 rounded"
                  type="button"
                  onClick={(e) => removeUser(e)}
                >
                  Excluir Usuário
                </button>
              </div>
              <div className="text-center">
                <Link to="/home" className="text-white text-sm">
                  <div
                    className="inline-block right-0 align-baseline font-light text-base text-500 hover:text-red-400"
                  >
                    Retornar à Home
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
