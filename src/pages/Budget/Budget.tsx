import "./Budget.css";

import Nav from "../../components/Nav/Nav";

const Budget = () => {


  return (
    <div className="budget">
      <Nav />
      <h1 className="budget-text">BUDGETS</h1>

      <div className="budget-cards">
        <div className={"card-one"} onClick={() => handleClick(0)}>Budget</div>
        <div className={"card-two"} onClick={() => handleClick(1)}>Save For A Goal</div>
      </div>

      <button className="create">create</button>
    </div>
  );
};

export default Budget;
