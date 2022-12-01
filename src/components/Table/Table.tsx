import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableSubHeader from './TableSubHeader';
import { FC } from 'react';
import { userType } from '../../types/userType';

const Table: FC<{
  users: userType[];
  onHandleDeleteSelected: Function;
  tableSelected: { userId: number; checked: boolean }[];
  setTableSelected: Function;
}> = ({ users, onHandleDeleteSelected, tableSelected, setTableSelected }) => {
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
