import * as PusherPushNotifications from "@pusher/push-notifications-web";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Registration from "./pages/Registration/Registration";
import Authentication from "./pages/Authentication/Authentication";
import LoginPage from "./pages/Login/LoginPage";
import CreateExpense from "./pages/CreateExpense/CreateExpense";
import ExpenseInputForm from "./pages/ExpenseInput/ExpenseInput";
import Budget from "./pages/Budget/Budget";
import "./App.css";

const beamsClient = new PusherPushNotifications.Client({
  instanceId: "6a4459c0-7c3d-4a3b-85fe-1781525efef8",
});

beamsClient
  .start()
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => console.log("Successfully registered and subscribed!"))
  .catch(console.error);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={Registration} />
        <Route path="/auth" Component={Authentication} />
        <Route path="/createres" Component={CreateExpense} />
        <Route path="/expenseinput" Component={ExpenseInputForm} />
        <Route path="/budget" Component={Budget} />
        <Route path="/dashboard" Component={Dashboard} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
