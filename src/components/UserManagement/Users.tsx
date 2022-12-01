import { FC, useEffect, useState } from 'react';
import Table from '../Table/Table';
import axios from 'axios';
import { userType } from '../../types/userType';
import Modal from '../Modal/Modal';
import {
  globalSearch,
  searchByDateFunc,
  searchByNameFunc,
  searchByStatusFunc,
} from './Utils/Search';
import TableSearch from '../Table/TableSearch';

const Users: FC = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<userType[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [searchByName, setSearchByName] = useState<string>('');
  const [searchByStatus, setSearchByStatus] = useState<string>('');
  const [searchByDate, setSearchByDate] = useState<string>('');

  useEffect(() => {
    globalSearch(users, search, setFilteredUsers);
  }, [search, users]);
  useEffect(() => {
    searchByStatusFunc(
      users,
      searchByStatus,
      setSearchByStatus,
      setFilteredUsers
    );
  }, [searchByStatus, users]);
  useEffect(() => {
    searchByNameFunc(users, searchByName, setFilteredUsers);
  }, [searchByName, users]);
  useEffect(() => {
    searchByDateFunc(users, searchByDate, setFilteredUsers);
  }, [searchByDate, users]);

  useEffect(() => {
    axios.get('http://localhost:4000/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const onHandleOpenModal = () => {
    setModal(!modal);
  };

  const resetAllFilters = () => {
    setSearch('');
    setSearchByName('');
    setSearchByStatus('');
    setSearchByDate('');
  };
  
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between p-2 pb-4">
        <h1 className="text-3xl">User Management</h1>
        <button
          className="rounded-md pr-3 pl-3 pt-2 pb-2 text-white bg-green-600 font-semibold text-md"
          onClick={onHandleOpenModal}
        >
          + Add New
        </button>
        <Modal modalSettings={{ modal, setModal }} />
      </div>
      <div className="bg-white rounded-lg border border-1">
        <TableSearch
          search={search}
          setSearch={setSearch}
          searchByName={searchByName}
          setSearchByName={setSearchByName}
          searchByDate={searchByDate}
          setSearchByDate={setSearchByDate}
          searchByStatus={searchByStatus}
          setSearchByStatus={setSearchByStatus}
          resetAllFilters={resetAllFilters}
        />
        <Table users={filteredUsers} />
      </div>
    </div>
  );
};

export default Users;
