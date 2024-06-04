export type Role = 'admin' | 'manager' | 'valet';

export type typeGetUserType = {
  uid: string;
  roles: Role[];
};

export type BaseComponent = {
  children?: React.ReactNode;
  className?: string;
};

export type MenuItem = {
  label: string;
  href?: string;
};