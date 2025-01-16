import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone, FaAddressCard, FaUpload } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebarNav}>
        <ul>
          <li>
            <FaUser />
            <span>User</span>
          </li>
          <li>
            <MdEmail />
            <span>Email</span>
          </li>
          <li>
            <FaSquarePhone />
            <span>Phone</span>
          </li>
          <li>
            <RiLockPasswordFill />
            <span>Password</span>
          </li>
          <li>
            <FaAddressCard />
            <span>Address</span>
          </li>
          <li>
            <FaUpload />
            <span>Profile </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
