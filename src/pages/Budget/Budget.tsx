import "./Budget.css";

import Nav from "../../components/Nav/Nav";

const Budget = () => {
  return (
    <div className="budget">
      <Nav />
      <h1 className="budget-text">Budget</h1>

      <div className="budget-cards">
        <div className="card-one">Time Sensitive Budget</div>
        <div className="card-two">Save For A Goal</div>
      </div>

      <button className="create">create</button>
    </div>
  );
};

export default Budget;
