import { createContext, useContext } from "react";

type ContextType = {
  selected: number[];
  handleDeleteUsers: () => void;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
};

const UsersListContext = createContext<ContextType | null>(null);

const useUsersListController = () => {
  const controller = useContext(UsersListContext);

  if (!controller) {
    throw new Error("useUsersListController must be used within <UsersListContext>");
  }
  return controller;
};

export { UsersListContext, useUsersListController };
