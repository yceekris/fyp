import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="nav">
      <div className="s-name" id="s-name" onClick={handleClick}>
        Budgee
      </div>
      <div className="site-nav">
        <Link to={"/budget"}>Budget</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <div className="account">
        <Link to={"/register"}> Sign-Up</Link>
        <Link to={"/login"}>Sign-in</Link>
      </div>
    </div>
  );
};

export default Nav;
