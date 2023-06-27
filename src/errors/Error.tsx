import React from 'react';

export const Error = ({ error }: { error: string }) => {
  return <span>{error}</span>;
};

export default Error;
