import React, { FC } from 'react';

export const AppBasement: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto flex justify-center align-middle py-4">
        All rights reserved © {currentYear}
      </div>
    </footer>
  );
};
