import "./App.css";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import ExpenseAdd from "./pages/expense-add/expense-add";
import ExpenseView from "./pages/expense-view/expense-view";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseProvider from "./services/expense.service";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ExpenseProvider>
                <Dashboard />
              </ExpenseProvider>
            }
          />
          <Route
            exact
            path="/expense-add"
            element={
              <ExpenseProvider>
                <ExpenseAdd />
              </ExpenseProvider>
            }
          />
          <Route exact path="/expense-view" element={<ExpenseView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
