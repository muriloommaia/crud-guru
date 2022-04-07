import React from 'react';
import { UserRender } from '../Types/UserTypes';

export default function LineTable({ user, idx }: { user: UserRender, idx: number }) {
  const { email, name } = user;
  return (
    <tr className="odd:bg-indigo-600">
      <td
        className="
          text-center text-dark
          font-medium
          text-base
          py-5
          px-2
          bg-[#F3F6FF]
          border-b border-l border-[#E8E8E8]
          "
      >
        {idx + 1}
      </td>
      <td
        className="
          text-center text-dark
          font-medium
          text-base
          py-5
          px-2
          bg-white
          border-b border-[#E8E8E8]
          "
      >
        {name}
      </td>
      <td
        className="
            text-center text-dark
            font-medium
            text-base
            py-5
            px-2
            bg-[#F3F6FF]
            border-b border-[#E8E8E8]
            "
      >
        {email}
      </td>
    </tr>
  );
}
