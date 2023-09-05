import { ReactNode } from 'react';
import { User } from 'next-auth';

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

export type TJadwalMk = {
  image: string;
  title: string;
  dateEven: string;
  time: string;
  position: 'vert' | 'hor';
};

export interface author {
  full_name: string;
}

export type TArticleResponse = {
  data: {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    slug: string;
    views: number;
    created_at: string;
    author: author;
    category: string;
    tags: string[];
    is_favorite: boolean;
  };
};

export interface TButton {
  title: string;
  buttonStyle: string;
  plus: string;
  onClick?: () => void;
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
  dataOptions?: string[];
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

type TCrumbItem = {
  link: string;
  name: string;
};

export type TBreadCrumbProps = {
  textColor?: string;
  bgColor?: string;
  items: TCrumbItem[];
};

export type TPopover = {
  title: string;
  menus: string[];
};

export type TextInput = {
  placeholder: string;
  id: string;
  title: string;
};

export type JPGInput = {
  id: string;
  title: string;
  htmlfor: string;
};
export type TMatakuliah = {
  image: string;
  total_student: number;
  title: string;
  desc: string;
};

export type TLoginData = {
  access_token: string;
  refresh_token: string;
} & User;
