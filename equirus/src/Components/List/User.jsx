/* eslint-disable react/prop-types */
import "./User.css";
function User({ user }) {
  return (
    <div className="user">
      <img src={`${user.img}`} className="img" />
      {user.Name}
    </div>
  );
}

export default User;
