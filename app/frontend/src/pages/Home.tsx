import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputFilter from '../components/InputFilter';
import Table from '../components/Table';
import TextPlatform from '../components/TextPlataform';
import { requestData } from '../services/requests';
import { RootState } from '../store';
import { setTotal } from '../store/totalUsersSlice';
import { UserRender } from '../Types/UserTypes';

export default function Home() {
  const [data, setData] = React.useState<UserRender[]>([]);
  const [user, setUser] = React.useState<UserRender>();
  const page = useSelector((state: RootState) => state.actualPage.page);
  const isLogged = useSelector((state: RootState) => state.logged.logged);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const dispatch = useDispatch();
  const getData = async () => {
    const endpoint = `/?page=${page}&filter=${filter}`;
    const { users, total } = await requestData(endpoint);
    dispatch(setTotal(total));
    setData(users);
  };
  const getUser = () => {
    const response = localStorage.getItem('user') as string;
    const responseJSON = JSON.parse(response) as UserRender;
    setUser(responseJSON);
  };
  useEffect(() => {
    document.title = 'Home';
    try {
      getData();
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, [page, filter]);
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-violet-900 py-5 text-stone-50">
        {(isLogged && user) && (
          <div className="flex flex-col flex-wrap text-center text-2xl">
            <h1>
              Olá,
              {' '}
              {user.name}
              {' '}
              seja bem vindo à nossa plataforma!
            </h1>
          </div>
        )}
        <TextPlatform />
      </div>
      <div className="flex flex-col items-center xl:max-w-screen-2xl m-auto">
        <InputFilter />
        <Table data={data} />
      </div>
      <div className="pt-12">
        <Footer />

      </div>
    </div>
  );
}
