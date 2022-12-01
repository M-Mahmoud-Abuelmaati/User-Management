import { FC, useEffect, useState } from 'react';

const TableHeader: FC<{
  tableData: {
    tableSelected: { userId: number; checked: boolean }[];
    setTableSelected: Function;
  };
}> = ({ tableData }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onHandleSelectAll = () => {
    const newData = [...tableData.tableSelected];
    newData.map((data) => {
      if(!checked) return data.checked = true;
      else return data.checked = false;
    });
    tableData.setTableSelected(newData);
  };

  useEffect(() => {
    const checkAllChecked = () => {
      let totalChecked = 0;
      tableData.tableSelected.forEach((val) => {
        if (val.checked === true) {
          totalChecked++;
        }
      });
      if (totalChecked >= 1) return setChecked(true);
      else return setChecked(false);
    };
    checkAllChecked();
  }, [tableData.tableSelected]);

  return (
    <tr>
      <th scope="col" className="p-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            onClick={onHandleSelectAll}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
        </div>
      </th>
      <th scope="col" className="py-3 px-6">
        Name
      </th>
      <th scope="col" className="py-3 px-6">
        User Name
      </th>
      <th scope="col" className="py-3 px-6">
        Email Address
      </th>
      <th scope="col" className="py-3 px-6">
        Group
      </th>
      <th scope="col" className="py-3 px-6">
        Status
      </th>
      <th scope="col" className="py-3 px-6">
        Created At
      </th>
    </tr>
  );
};

export default TableHeader;
