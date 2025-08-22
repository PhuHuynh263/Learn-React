import Header from "../Header";
import { createContext } from "react";
export const MenuContext = createContext();

function Lauout() {
  const menus = ["Home", "News", "Information"];

  return (
    <>
      <MenuContext.Provider value={menus}>
        <Header />
      </MenuContext.Provider>
      <div>Main</div>
      <div>Footer</div>
    </>
  );
}
export default Lauout;
