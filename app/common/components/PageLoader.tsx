import React, { FC } from 'react';

export const PageLoader: FC = () => (
  <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 z-[99]">
    <div className="flex inset-0 h-full w-full bg-gray-800 opacity-50 items-center justify-center">
      <div className="w-12 h-12 rounded-full animate-spin border-x border-solid border-orange-500 border-t-transparent"></div>
    </div>
  </div>
);
