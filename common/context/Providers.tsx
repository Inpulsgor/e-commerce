import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};
