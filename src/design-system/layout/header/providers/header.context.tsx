import React, { useContext, useReducer } from "react";

type State = {
  isMenuOpen: boolean;
};

type Action = { type: "SHOW_MENU" } | { type: "HIDE_MENU" };

// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;

const HeaderStateContext = React.createContext<State | undefined>(undefined);
const HeaderDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, isMenuOpen: true };
    case "HIDE_MENU":
      return { ...state, isMenuOpen: false };
    default:
      throw new Error("Unhandled action type in header context reducer");
  }
}

type HeaderProviderProps = { children: React.ReactNode };

const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const defaultState: State = { isMenuOpen: false };
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <HeaderStateContext.Provider value={state}>
      <HeaderDispatchContext.Provider value={dispatch}>{children}</HeaderDispatchContext.Provider>
    </HeaderStateContext.Provider>
  );
};

function useHeaderState() {
  const context = useContext(HeaderStateContext);
  if (context === undefined) {
    throw new Error("useHeaderState must be used within a HeaderProvider");
  }
  return context;
}

function useHeaderDispatch() {
  const context = useContext(HeaderDispatchContext);
  if (context === undefined) {
    throw new Error("useHeaderDispatch must be used within a HeaderProvider");
  }
  return context;
}

export { HeaderProvider, useHeaderState, useHeaderDispatch };
