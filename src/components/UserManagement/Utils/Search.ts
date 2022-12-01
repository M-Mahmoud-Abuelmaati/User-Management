import { userType } from '../../../types/userType';
import { format } from 'date-fns';

export const globalSearch = (
  users: userType[],
  search: string,
  setFilteredUsers: Function
) => {
  const searchFilter = (user: userType) =>
    [
      user.name,
      user.email,
      user.group,
      user.status,
      format(user.createdAt, `LLL dd, yyyy`),
    ]
      .join('')
      .toLowerCase()
      .indexOf(search.toLowerCase()) !== -1;

  const filteredUsers = users.filter(searchFilter);
  setFilteredUsers(filteredUsers);
};

export const searchByNameFunc = (
  users: userType[],
  searchByName: string,
  setFilteredUsers: Function
) => {
  const searchFilter = (user: userType) =>
    [user.name].join('').toLowerCase().indexOf(searchByName.toLowerCase()) !==
    -1;

  const filteredUsers = users.filter(searchFilter);
  setFilteredUsers(filteredUsers);
};

export const searchByStatusFunc = (
  users: userType[],
  searchByStatus: string,
  setSearchByStatus: Function,
  setFilteredUsers: Function
) => {
  if (searchByStatus === 'any') setSearchByStatus('');
  const searchFilter = (user: userType) =>
    [user.status]
      .join('')
      .toLowerCase()
      .indexOf(searchByStatus.toLowerCase()) !== -1;

  const filteredUsers = users.filter(searchFilter);
  setFilteredUsers(filteredUsers);
};

export const searchByDateFunc = (
  users: userType[],
  searchByDate: string,
  setFilteredUsers: Function
) => {
  const searchFilter = (user: userType) =>
    [format(user.createdAt, `yyyy-MM-dd`)]
      .join('')
      .toLowerCase()
      .indexOf(searchByDate.toLowerCase()) !== -1;
  const filteredUsers = users.filter(searchFilter);
  setFilteredUsers(filteredUsers);
};
