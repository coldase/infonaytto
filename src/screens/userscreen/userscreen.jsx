//Import styles
import { Navigate } from "react-router-dom";
import "./userscreen.css";

const UserScreen = ({ currentUser }) => {
  //if user is not logged in, redirect back to homepage
  if (!localStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("userid");
    window.location.href = "/";
  };
  return (
    <div>
      <h1 className="user">Userscreen for id: {currentUser}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserScreen;
