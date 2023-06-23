import "./Dashboard.css";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  return (
    <div className="dashboard-component">
      <Nav /> 
      <div className="dashboard-container">
        <h2>DASHBOARD</h2>
        <div className="dashboard">
          <div className="side-one">
            <h3>
              <span>HI,</span>
              <span>Yceekris</span>
            </h3>
            <div className="money-info">
              <div className="info-box">
                <span className="info-name">Income</span>
                <span className="info-details">N300,000</span>
              </div>
              <div className="info-box">
                <span className="info-name">Expenses</span>
                <span className="info-details">N250,000</span>
              </div>
              <div className="info-box">
                <span className="info-name">Savings</span>
                <span className="info-details">N30,000</span>
              </div>
            </div>
            <div className="daily-info">
              <h4>Daily</h4>
              <div className="daily-bars">
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                  <div className="name">Sun</div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-two">
            <h3>Goals</h3>
            <div className="goal">
              <div className="text">
                <span>Payback Loan</span>
                <span>15 days to go</span>
              </div>
              <div className="progress-doughnut">
                <div className="progress-value">0%</div>
                <svg className="progress-svg">
                  <circle
                    className="progress-bar-bg"
                    cx="50%"
                    cy="50%"
                    r="70"
                  ></circle>
                  <circle
                    className="progress-bar"
                    cx="50%"
                    cy="50%"
                    r="70"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="expense-container">
        <h4>Categorize your expenses</h4>
        <div className="expense">
          <div className="expense-card">Feeding</div>
          <div className="expense-card">Feeding</div>
          <div className="expense-card">Feeding</div>
          <div className="expense-card">Feeding</div>
          <div className="expense-card">Add new</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
