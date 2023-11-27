'use client';

import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex justify-center items-center gap-3">
      <p>Something went wrong!</p>

      <Button variant="outline" onClick={() => reset()}>
        Please try again
      </Button>
    </div>
  );
}
