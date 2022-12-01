import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { userType } from '../../types/userType';

const TableBody: FC<{
  user: userType;
  tableData: {
    tableSelected: { userId: number; checked: boolean }[];
    setTableSelected: Function;
  };
}> = ({ user, tableData }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const onHandleClick = () => {
    if (tableData.tableSelected) {
      const index = tableData.tableSelected.findIndex(
        (val) => val.userId === user.id
      );
      if (index !== -1) {
        const newData = [...tableData.tableSelected];
        newData[index].checked = !newData[index].checked;
        setChecked(!newData[index].checked);
        tableData.setTableSelected(newData);
      } else {
        setChecked(false);
      }
    }
  };

  useEffect(() => {
    const onHandleChecked = () => {
      if (tableData.tableSelected) {
        const index = tableData.tableSelected.findIndex(
          (val) => val.userId === user.id
        );
        if (index !== -1) {
          setChecked(tableData.tableSelected[index].checked);
        } else {
          setChecked(false);
        }
      }
    };
    onHandleChecked();
  }, [tableData.tableSelected, user.id]);

  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            onClick={onHandleClick}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
        </div>
      </td>
      <th
        scope="row"
        className="py-4 px-6 font-medium whitespace-nowrap text-black"
      >
        <span
          className={`p-1 rounded-full ${
            user.status === 'Locked' ? 'bg-red-300/50' : 'bg-green-300/50'
          } text-[10px] font-bold`}
        >
          {user.name.charAt(0) + (user.name.split(' ')[1] ? user.name.split(' ')[1].charAt(0) : '')}
        </span>{' '}
        {user.name}
      </th>
      <td className="py-4 px-6 text-black">{user.name}</td>
      <td className="py-4 px-6 text-black">{user.email}</td>
      <td className="py-4 px-6 text-black">{user.group}</td>
      <th
        scope="row"
        className="py-4 px-6 whitespace-nowrap font-medium text-black"
      >
        <span className="flex gap-1 items-center">
          {user.status}{' '}
          {user.status === 'Locked' ? (
            <AiOutlineExclamationCircle size={16} color="red" />
          ) : (
            <RiArrowDownSLine className="cursor-pointer" />
          )}
        </span>
      </th>
      <td className="py-4 px-6 text-black">
        {format(user.createdAt, `LLL dd, yyyy`)}
      </td>
    </tr>
  );
};

export default TableBody;
