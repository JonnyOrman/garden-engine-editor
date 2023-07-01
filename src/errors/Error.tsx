import React from 'react';

export const Error = ({ error }: { error: string | null }) => {
  if (!error) {
    return null;
  }

  return <span>{error}</span>;
};

export default Error;
