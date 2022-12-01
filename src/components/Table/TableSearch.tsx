import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { tableSearchType } from '../../types/userType';

const TableSearch: FC<tableSearchType> = ({
  search,
  setSearch,
  searchByName,
  setSearchByName,
  searchByDate,
  setSearchByDate,
  searchByStatus,
  setSearchByStatus,
  resetAllFilters,
}) => {
  return (
    <div className="flex p-5 gap-2 items-center relative">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="indent-5 text-sm p-2 rounded border w-1/6 border-1 border-gray-300"
      />
      <BsSearch className="absolute top-6.5 left-7" size={14} />
      <input
        type="text"
        placeholder="User Name"
        value={searchByName}
        onChange={(e) => setSearchByName(e.target.value)}
        className="text-sm p-2 rounded border border-1 border-gray-300"
      />
      <div className="relative pt-3.5 pb-3.5">
        <label
          htmlFor="selection"
          className="absolute text-xs top-1.5 left-2 font-semibold bg-white bg-opacity-75 text-gray-600"
        >
          User Status
        </label>
        <select
          id="selection"
          className="text-sm p-2 rounded border border-1 border-gray-300 focus:outline-none"
          value={searchByStatus}
          onChange={(e) => setSearchByStatus(e.target.value)}
        >
          <option value="any">Any</option>
          <option value="locked">Locked</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="relative pt-3.5 pb-3.5">
        <label
          htmlFor="date"
          className="absolute text-xs top-1.5 left-3 bg-white font-semibold text-gray-600"
        >
          Creation Date
        </label>
        <input
          type="date"
          id="date"
          value={searchByDate}
          onChange={(e) => {
            setSearchByDate(e.target.value);
            console.log(e.target.value);
          }}
          className="text-sm p-2 rounded border border-1 border-gray-300 focus:outline-none"
        />
      </div>
      <h1
        className="text-blue-600 hover:underline hover:underline-offset-4 cursor-pointer"
        onClick={() => resetAllFilters()}
      >
        All Filters
      </h1>
    </div>
  );
};

export default TableSearch;
