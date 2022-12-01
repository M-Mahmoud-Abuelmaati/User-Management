import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableSubHeader from './TableSubHeader';
import { FC, useEffect, useState } from 'react';
import { userType } from '../../types/userType';
import axios from 'axios';

const Table: FC<{ users: userType[] }> = ({ users }) => {
  const [tableSelected, setTableSelected] = useState<
    { userId: number; checked: boolean }[]
  >([]);

  useEffect(() => {
    users.forEach((user) => {
      setTableSelected((prev) => [
        ...prev,
        { userId: user.id, checked: false },
      ]);
    });
  }, [users]);

  const onHandleDeleteSelected = () => {
    tableSelected.forEach(async (val) => {
      if (val.checked) {
        axios
          .delete(`http://localhost:4000/users/${val.userId}`)
          .then(() => window.location.reload());
      } else {
        console.log('Nothing selected');
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <TableHeader
        tableData={{ tableSelected, setTableSelected }}
        onHandleDeleteSelected={onHandleDeleteSelected}
      />
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-500 bg-gray-300/50">
          <TableSubHeader tableData={{ tableSelected, setTableSelected }} />
        </thead>
        <tbody>
          {users.map((user) => (
            <TableBody
              user={user}
              key={user.id}
              tableData={{ tableSelected, setTableSelected }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
