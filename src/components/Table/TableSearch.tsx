import { FC } from 'react';
import DatePicker from 'react-date-picker';
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
        className="indent-5 text-sm p-2 rounded border w-1/6 border-gray-300"
      />
      <BsSearch className="absolute top-6.5 left-7" size={14} />
      <input
        type="text"
        placeholder="User Name"
        value={searchByName}
        onChange={(e) => setSearchByName(e.target.value)}
        className="text-sm p-2 rounded border border-gray-300"
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
          className="text-sm p-2 rounded border border-gray-300 focus:outline-none"
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
          className="absolute text-xs top-1.5 left-3 bg-white font-semibold text-gray-600"
          htmlFor="date"
        >
          Creation Date
        </label>
        <DatePicker
          name="date"
          value={searchByDate[0]}
          format="y/MM/dd"
          selectRange
          minDate={new Date('2022-01-01')}
          maxDate={new Date('2024-01-01')}
          className={'h-10'}
          onChange={(date: Date[]) => {
            if (date === null) {
              setSearchByDate([]);
            } else {
              setSearchByDate(date);
            }
          }}
          calendarClassName="text-sm p-2"
        />
        {/* <input
          type=""
          id="date"
          multiple={true}
          value={searchByDate}
          onChange={(e) => {
            setSearchByDate(e.target.value);
            console.log(e);
          }}
          
        /> */}
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
