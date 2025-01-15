import { useState } from "react";
import "./Navbar.css";
import { IoToggleOutline } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
import ModalAntd from "../ModalAntd/ModalAntd";

const Layout = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleTheme = () => {
    setIsGreen(!isGreen);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div
      className={`navMainContainer ${isGreen ? "green-theme" : "black-theme"}`}
    >
      <div className="navContainer">
        <h1>Task bar</h1>
        <div className="toggleContainer" onClick={toggleTheme}>
          <IoToggleOutline className="toggleIcon" />
        </div>
      </div>
      <div className="sidebarContainer">
        <div>
          <Sidebar />
        </div>
        <div className="btnContainer">
          <button className="btn" onClick={showModal}>
            Add user
          </button>
          <ModalAntd
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
