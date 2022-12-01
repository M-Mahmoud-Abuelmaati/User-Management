export interface sidePanelType {
  id: number;
  name: string;
  subItem: {
    name: string;
    path: string;
  }[];
}

export interface userType {
  id: number;
  name: string;
  email: string;
  group: string;
  status: string;
  createdAt: number;
}

export interface modalInputType {
  fullName: string;
  setFullName: Function;
  userName: string;
  setUserName: Function;
  email: string;
  setEmail: Function;
  group: string;
  setGroup: Function;
}
