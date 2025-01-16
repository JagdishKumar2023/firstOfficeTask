import "./Table.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const prevData = localStorage.getItem("userForm");
const parsedData = prevData ? JSON.parse(prevData) : [];

const Table = () => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>User </th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Profile</th>
            <th className="iconStyle" >{<FaRegEdit />}</th>
            <th className="iconStyle" >{<MdDelete />}</th>
          </tr>
        </thead>
        <tbody>
          {parsedData.map((ele, index) => (
            <tr key={index}>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td>{ele.phone}</td>
              <td>{ele.address}</td>
              <td>{ele.profile}</td>
              <td className="icon" >{<FaRegEdit />}</td>
              <td className="icon" >{<MdDelete />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
