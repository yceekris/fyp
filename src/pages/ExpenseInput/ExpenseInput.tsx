import { useState } from "react";
import FormContainer from "../../components/FormContainer/FormContainer";
import "./ExpenseInput.css";
import Nav from "../../components/Nav/Nav";

interface ExpenseInput {
  amount: number;
  date: string;
}

const ExpenseInputForm: React.FC = () => {
  const [expense, setExpense] = useState<ExpenseInput>({
    amount: 0,
    date: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle expense submission, e.g., send to backend or store in state
    console.log(expense);
    // Reset the form after submission
    setExpense({
      amount: 0,
      date: "",
    });
  };

  return (
    <div className="expense-input">
      <Nav />
      <h3>Enter Your Total Expenses For Today</h3>
      <FormContainer
        container_class="form-container"
        children={
          <form onSubmit={handleSubmit} className="form">
            <div className="box">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={expense.amount}
                onChange={handleInputChange}
                required
              />
            </div>
           
            <div className="box">
              <label htmlFor="date">Day:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={expense.date}
                onChange={handleInputChange}
                required
              />
            </div>
            
          </form>
        }
      />
    </div>
  );
};

export default ExpenseInputForm;
