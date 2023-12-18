/* eslint-disable react/prop-types */
import "./Data.css";
function Data({ user }) {
  return (
    <div className="data">
      <div className="userdata">
        <ul className="profile">

        <div className="image">
          <img src={`${user.img}`} className="dataimg" />
        </div>
        <div>{user.Name}</div>
        <div>{user.Phone}</div>
        <div>{user.Email}</div>
        </ul>
      </div>
    </div>
  );
}

export default Data;
