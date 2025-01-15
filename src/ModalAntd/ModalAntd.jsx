import { useState } from "react";
import { Modal, Input, Button } from "antd";

// eslint-disable-next-line react/prop-types
const ModalAntd = ({ isModalVisible, setIsModalVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    setIsModalVisible(false);
    localStorage.getItem("userForm", JSON.stringify(formData));
    setFormData({ name: "", email: "", phone: "", password: "", address: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Modal
        title="Add New User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <label htmlFor="name">Name</label>
        <Input
          placeholder="Enter your name"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Enter your email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Phone</label>
        <Input
          placeholder="Enter your phone"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter your password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Address</label>
        <Input
          placeholder="Enter your address"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <label htmlFor="photo">Photo Upload</label>
        <Input type="file" name="profilePhoto" id="photo" />
      </Modal>
    </div>
  );
};

export default ModalAntd;
