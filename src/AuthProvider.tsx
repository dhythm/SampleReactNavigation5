import React, { createContext, useReducer } from 'react';

type State =
  | { status: 'Unauthenticated'; token: string }
  | { status: 'Loading'; provider: string }
  | { status: 'Error'; error: any }
  | { status: 'Authenticated'; token: string };

type Action =
  | { type: 'START_LOGIN'; provider: string }
  | { type: 'CANCEL_LOGIN' }
  | { type: 'COMPLETE_LOGIN'; token: string }
  | { type: 'COMPLETE_LOGOUT' }
  | { type: 'LOGIN_ERROR'; error: any };

type Dispatch = (action: Action) => void;

const authReducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case 'START_LOGIN':
      return {
        ...prevState,
        status: 'Loading',
        provider: action.provider,
      };
    case 'CANCEL_LOGIN':
      return {
        ...prevState,
        status: 'Unauthenticated',
        token: undefined,
      };
    case 'COMPLETE_LOGIN':
      return {
        ...prevState,
        status: 'Authenticated',
        token: action.token,
      };
    case 'COMPLETE_LOGOUT':
      return {
        ...prevState,
        status: 'Unauthenticated',
        token: undefined,
      };
    case 'LOGIN_ERROR':
      return {
        ...prevState,
        status: 'Error',
        error: action.error,
      };
  }
};

const AuthStateContext = createContext<State>({
  status: 'Unauthenticated',
  token: undefined,
});
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  return context;
};

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  return context;
};

interface Props {
  readonly children: React.ReactNode;
}

const AuthProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    status: 'Unauthenticated',
    token: undefined,
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
