import { useHeaderDispatch, useHeaderState } from "../providers/header.context";
import { HamburgerIcon } from "@components/shared/icons/hamburger-icon";
import CloseIcon from "@components/shared/icons/close-icon";
import styles from "./hamburger.module.scss";

function Hamburger() {
  const { isMenuOpen } = useHeaderState();
  const headerDispatch = useHeaderDispatch();

  const toggleMenu = () => {
    if (isMenuOpen) {
      headerDispatch({ type: "HIDE_MENU" });
    } else headerDispatch({ type: "SHOW_MENU" });
  };

  return (
    <button onClick={toggleMenu} className={styles.button}>
      {isMenuOpen ? <CloseIcon className={styles.hamburger} /> : <HamburgerIcon className={styles.hamburger} />}
    </button>
  );
}

export { Hamburger };
