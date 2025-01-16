import { useState } from "react";
import "./user.scss";
import ModalAntd from "../../ModalAntd/ModalAntd";

// eslint-disable-next-line react/prop-types
const UserLayout = ({ getFormData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="userLayout">
        <div className="header">
          <button className="btn" onClick={showModal}>
            Add user
          </button>
        </div>
      </div>

      <ModalAntd
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        getFormData={getFormData}
      />
    </>
  );
};

export default UserLayout;
