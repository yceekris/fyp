import React, { useState } from "react";
import FormContainer from "../../components/FormContainer/FormContainer";
import "./ExpenseInput.css";
import Nav from "../../components/Nav/Nav";

interface ExpenseInput {
  amount: number;
  category: string;
  description?: string;
  paymentMethod?: string;
}

const ExpenseInputForm: React.FC = () => {
  const [expense, setExpense] = useState<ExpenseInput>({
    amount: 0,
    category: "",
    description: "",
    paymentMethod: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      category: "",
      description: "",
      paymentMethod: "",
    });
  };

  return (
    <div className="expense-input">
      <Nav />
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
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={expense.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="box">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={expense.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="box">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={expense.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default ExpenseInputForm;
