import { MdModeEdit } from 'react-icons/md';
import { BiBlock, BiDotsVerticalRounded } from 'react-icons/bi';
import { FiLock, FiSettings } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { FC, useEffect, useState } from 'react';

const TableHeader: FC<{
  tableData: {
    tableSelected: { userId: number; checked: boolean }[];
    setTableSelected: Function;
  };
  onHandleDeleteSelected: Function;
}> = ({ tableData, onHandleDeleteSelected }) => {
  const [totalNumbers, setTotalNumbers] = useState<number>(0);

  useEffect(() => {
    const checkTotalNumbers = () => {
      let totalNum = 0;
      tableData.tableSelected.forEach((val) => {
        if (val.checked) totalNum += 1;
        if (totalNum === 0) totalNum = 0;
        setTotalNumbers(totalNum);
      });
    };

    checkTotalNumbers();
  }, [tableData.tableSelected]);

  const onHandleDeselectAll = () => {
    const newData = [...tableData.tableSelected];
    newData.map((data) => {
      return (data.checked = false);
    });
    tableData.setTableSelected(newData);
  };

  return (
    <div className="pb-4 pl-5 pr-5 bg-white flex gap-3 whitespace-nowrap">
      <h4 className="flex items-center select-none">{totalNumbers} selected</h4>
      <span className="border-l border border-gray-400"></span>
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2 w-full">
          <MdModeEdit
            className="bg-gray-200 p-1 rounded cursor-pointer"
            size={32}
          />
          <BiBlock
            onClick={() => onHandleDeleteSelected(tableData.tableSelected)}
            className="bg-gray-200 p-1 rounded cursor-pointer"
            size={32}
          />
          <FiLock
            className="bg-gray-200 p-1 rounded cursor-pointer"
            size={32}
          />
          <h4 className="bg-gray-200 p-1 pl-2 pr-2 rounded cursor-pointer font-semibold">
            Assign to Profile
          </h4>
          <h4 className="bg-gray-200 p-1 pl-2 pr-2 rounded cursor-pointer font-semibold">
            Assign to Group
          </h4>
          <BiDotsVerticalRounded
            className="bg-gray-200 p-1 rounded cursor-pointer"
            size={32}
          />
          <h4
            className="underline underline-offset-2 cursor-pointer"
            onClick={onHandleDeselectAll}
          >
            Unselect all
          </h4>
        </div>
        <div className="flex gap-2">
          <BsDownload
            className="flex items-center bg-gray-200 p-1 pl-2 pr-2 rounded cursor-pointer"
            size={32}
          />
          <FiSettings
            className="flex items-center bg-gray-200 p-1 pl-2 pr-2 rounded cursor-pointer"
            size={32}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
