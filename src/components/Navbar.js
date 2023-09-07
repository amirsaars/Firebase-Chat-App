import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

const Navbar = ({ logoutHandler }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.name}>Botogram</div>
      <div onClick={logoutHandler} className={styles.logout}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
