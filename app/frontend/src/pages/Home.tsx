import React, { useEffect } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { requestData } from '../services/requests';
import { UserRender } from '../Types/UserTypes';

export default function Home() {
  const [data, setData] = React.useState<UserRender[]>([]);
  const [user, setUser] = React.useState<UserRender>();
  const getData = async () => {
    const response = await requestData('/');
    setData(response);
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
  }, [document.title]);
  return (
    <div>
      <Header />
      <div>
        {user && (
        <h1>
          Olá,
          {' '}
          {user.name}
          {' '}
          seja bem vindo a nossa plataforma!
        </h1>
        )}
      </div>
      <div className="bg-grey col-12 mt-3 align-middle justify-content-center flex">
        <input type="text" className="col-8 border-2 p-2" placeholder="Search for Users" id="search-filter" />
      </div>
      <Table data={data} />
    </div>
  );
}
