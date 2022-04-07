import React, { useEffect } from 'react';
import Table from '../components/Table';
import { requestData } from '../services/requests';
import { UserRender } from '../Types/UserTypes';

export default function Home() {
  const [data, setData] = React.useState<UserRender[]>([]);
  const getData = async () => {
    const response = await requestData('/');
    await setData(response);
  };
  useEffect(() => {
    document.title = 'Home';
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className="bg-grey col-12 mt-3 align-middle justify-content-center flex">
        <input type="text" className="col-8 border-2 p-2" placeholder="Search for Users" id="search-filter" />
      </div>
      <Table data={data} />
    </div>
  );
}
