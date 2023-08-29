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
  logo: React.ReactElement;
};

export type TJadwalMK = {
  containerStyle: string;
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
  phone?: string;
}

export interface TButton {
  title: string;
  buttonStyle: string;
  plus: string;
  onClick: () => void;
}

export interface TSearchbar {
  placeholder: string;
}

export interface TTable {
  children: ReactNode;
}

export interface TModal {
  isVisible: boolean;
  children: ReactNode;
}

export interface TDropdown {
  dataOptions: string[];
  placeholder: string;
  icons: React.ReactElement;
  reverse: boolean;
  textCentre: boolean;
  shadow: boolean;
  bold: boolean;
}

export interface TPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (type: number) => void;
}
