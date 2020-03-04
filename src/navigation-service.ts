import React from 'react';

export const isMountedRef = React.createRef<boolean>();
export const navigationRef = React.createRef();

const navigate = (name: string, params?: any) => {
  console.log({ isMountedRef, navigationRef });
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  } else {
    console.log('Not mounted.');
  }
};

export default {
  navigate,
};
