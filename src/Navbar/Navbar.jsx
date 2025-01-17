import { useState } from "react";
import "./Navbar.css";
import { IoToggleOutline } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
import UserLayout from "../components/user/user";
import Table from "../Table/Table";

const Layout = () => {
  const LocalStrData = localStorage.getItem("userForm");
  const storedPhoto = localStorage.getItem("userProfilePhoto");

  console.log("aksjgdiak", LocalStrData);

  const [isGreen, setIsGreen] = useState(true);

  const toggleTheme = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div className={`mainContainer ${isGreen ? "green-bg" : "black-bg"}`}>
      <div className={`navContainer`}>
        <h1>Task bar</h1>

        {storedPhoto && (
          <div className="profile-photo">
            <img src={storedPhoto} alt="Profile" className="profileImage" />
          </div>
        )}

        <div className="toggleContainer" onClick={toggleTheme}>
          <IoToggleOutline className="toggleIcon" />
        </div>
      </div>
      <div className="layoutContainer">
        <div>
          <Sidebar />
        </div>
        <div className="componentContainer">
          <UserLayout />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Layout;
