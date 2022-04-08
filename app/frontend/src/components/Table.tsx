import React from 'react';
import { UserRender } from '../Types/UserTypes';
import LineTable from './LineTable';

export default function Table({ data }: { data: UserRender[] }) {
  return (
    <section className="flex flex-col bg-blue-900 py-5 lg:py-5 items-center w-11/12">
      <div className="container">
        <div className="flex flex-wrap -mx-4 center">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="rounded-lg">
                  <tr className="bg-primary text-center">
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
                           border-l border-transparent
                           "
                    >
                      Id
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
                      Name
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
                <tbody>
                  {data.map((user, idx) => (
                    <LineTable key={user.id} user={user} idx={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
