import { ReactNode } from 'react';

type dataSidebar = {
  title: string;
  path: string;
  icon: React.ReactElement;
};

export type TSidebarProp = {
  children: ReactNode;
  dataSidebar?: dataSidebar[];
};

export type TBaseLayout = {
  children: ReactNode;
};

export type TCard = {
  amount: number;
  title: string;
};
interface Username {
  firstname: string;
  lastname: string;
}
export interface UserData {
  id?: number;
  name?: Username;
  email?: string;
  username?: string;
}

export interface TButton {
  title: string;
  buttonStyle: string;
  plus: string
}

export interface TSearchbar {
  placeholder: string;
}
