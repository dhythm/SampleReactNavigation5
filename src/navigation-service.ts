import React from 'react';

export const isMountedRef = React.createRef<boolean>();
export const navigationRef = React.createRef();

let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function getTopLevelNavigator() {
  return _navigator;
}

const navigate = (name: string, params?: any) => {
  // console.log({ isMountedRef, navigationRef });
  // if (isMountedRef.current && navigationRef.current) {
  //   navigationRef.current?.navigate(name, params);
  // } else {
  //   console.log('Not mounted.');
  // }
  _navigator.navigate(name, params);
};

export default {
  setTopLevelNavigator,
  getTopLevelNavigator,
  navigate,
};
