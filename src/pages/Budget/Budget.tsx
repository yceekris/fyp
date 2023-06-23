import "./Budget.css";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/Nav/Nav";

const Budget = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createres");
  };

  return (
    <div className="budget">
      <Nav />
      <h1 className="budget-text">Budget</h1>

      <div className="budget-cards">
        <div className="card-one" onClick={handleClick}>Time Sensitive Budget</div>
        <div className="card-two" onClick={handleClick}>Save For A Goal</div>
      </div>
    </div>
  );
};

export default Budget;
