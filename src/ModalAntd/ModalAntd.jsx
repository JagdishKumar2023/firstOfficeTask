import { useState } from "react";
import { Modal, Input, Button, message } from "antd";

// eslint-disable-next-line react/prop-types
const ModalAntd = ({ isModalVisible, setIsModalVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    profilePhoto: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.profilePhoto) {
      newErrors.profilePhoto = "Photo is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);

      const prevData = localStorage.getItem("userForm");
      const parsedData = prevData ? JSON.parse(prevData) : [];
      const updatedData = [...parsedData, formData];

      localStorage.setItem("userForm", JSON.stringify(updatedData));

      setIsModalVisible(false);
      message.success("User added successfully!");
    } else {
      message.error("Please fill the form before submitting.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
    setErrors({ ...errors, profilePhoto: "" });
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
          className={`input ${errors.name && "input-error"}`}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Enter your email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`input ${errors.email && "input-error"}`}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <label htmlFor="phone">Phone</label>
        <Input
          placeholder="Enter your phone"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`input ${errors.phone && "input-error"}`}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}

        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter your password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          className={`input ${errors.password && "input-error"}`}
        />
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}

        <label htmlFor="address">Address</label>
        <Input
          placeholder="Enter your address"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className={`input ${errors.address && "input-error"}`}
        />
        {errors.address && <span className="error-text">{errors.address}</span>}

        <label htmlFor="photo">Photo Upload</label>
        <Input
          type="file"
          name="profilePhoto"
          id="photo"
          onChange={handleFileChange}
          className={`input ${errors.profilePhoto && "input-error"}`}
        />
        {errors.profilePhoto && (
          <span className="error-text">{errors.profilePhoto}</span>
        )}
      </Modal>
    </div>
  );
};

export default ModalAntd;
