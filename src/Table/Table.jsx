import { useState, useEffect } from "react";
import "./Table.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalAntd from "../ModalAntd/ModalAntd";

const Table = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editField, setEditField] = useState(null);

  useEffect(() => {
    const prevData = localStorage.getItem("users");
    if (prevData) {
      setData(JSON.parse(prevData));
    }
  }, []);

  const handleEdit = (ele) => {
    setEditField({
      id: ele.id,
      name: ele.name,
      email: ele.email,
      phone: ele.phone,
      password: ele.password,
      address: ele.address,
      profilePhoto: ele.profilePhoto || null,
    });
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));
  };

  return (
    <>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Profile</th>
              <th className="iconStyle">{<FaRegEdit />}</th>
              <th className="iconStyle">{<MdDelete />}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele?.id}>
                <td>{ele?.name}</td>
                <td>{ele?.email}</td>
                <td>{ele?.password}</td>
                <td>{ele?.phone}</td>
                <td>{ele?.address}</td>
                <td>
                  <img src={ele?.profile} alt="" />
                </td>
                <td className="icon" onClick={() => handleEdit(ele)}>
                  {<FaRegEdit />}
                </td>
                <td className="icon" onClick={() => handleDelete(ele.id)}>
                  {<MdDelete />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEdit && (
        <ModalAntd
          isModalVisible={isEdit}
          setIsModalVisible={setIsEdit}
          newData={editField}
        />
      )}
    </>
  );
};

export default Table;
