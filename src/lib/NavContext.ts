import { createContext, useContext } from "react";

type Navigate = (section: string) => void;

export const NavContext = createContext<Navigate>(() => {});

export function useNavigate() {
  return useContext(NavContext);
}
