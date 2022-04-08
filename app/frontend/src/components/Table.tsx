import React from 'react';
import { UserRender } from '../Types/UserTypes';
import LineTable from './LineTable';
import Pagination from './Pagination';

export default function Table({ data }: { data: UserRender[] }) {
  return (
    <section className="flex flex-col bg-green-500 items-center w-11/12 rounded-lg shadow-2xl ">
      <div className="container">
        <div className="flex flex-wrap center">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="rounded-lg">
                  <tr className="bg-primary text-center">
                    <th
                      className="
                           w-1/12
                           min-w-[120px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                    >
                      Posição
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Nome
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className=" min-h-[955px]">
                  {data.map((user, idx) => (
                    <LineTable key={user.id} user={user} idx={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-3 w-11/12">
        <Pagination />
      </div>
    </section>
  );
}
