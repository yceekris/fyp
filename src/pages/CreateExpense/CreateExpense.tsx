import { useState } from "react";
import "./CreateExpense.css";

import Nav from "../../components/Nav/Nav";
import FormContainer from "../../components/FormContainer/FormContainer";

interface ExpenseCategory {
  name: string;
  amount: string;
}

const CreateExpense = () => {
  const [expenseCategories, setExpenseCategories] = useState<ExpenseCategory[]>(
    []
  );

  const handleAddExpenseCategory = () => {
    setExpenseCategories((prevCategories) => [
      ...prevCategories,
      { name: "", amount: "" },
    ]);
  };

  const handleExpenseNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCategories = [...expenseCategories];
    updatedCategories[index].name = e.target.value;
    setExpenseCategories(updatedCategories);
  };

  const handleExpenseAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCategories = [...expenseCategories];
    updatedCategories[index].amount = e.target.value;
    setExpenseCategories(updatedCategories);
  };

  return (
    <div className="createEx ">
      <Nav />
      <button onClick={handleAddExpenseCategory}>Add expense category</button>
      <FormContainer container_class="form-container" children = {expenseCategories.map((category, index) => (
        <div key={index} className="box">
          <input
            type="text"
            value={category.name}
            onChange={(e) => handleExpenseNameChange(e, index)}
            placeholder="Expense name"
            style={{ background: "transparent" }}
            required
          />
          <input
            type="text"
            value={category.amount}
            onChange={(e) => handleExpenseAmountChange(e, index)}
            placeholder="Amount"
            pattern="^\d+(\.\d{1,2})?$"
            required
          />
        </div>
      ))} />
    </div>
  );
};

export default CreateExpense;
