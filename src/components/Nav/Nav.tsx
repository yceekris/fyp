import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <div className="s-name" id="s-name">Budgee</div>
      <div className="Chat">BudBoy</div>
      <div className="site-nav">
          <a href="./budget.html">Budget</a>
          <a href="#">Profile</a>
          <a href="#">About</a>
      </div>
      <div className="account">
          <Link to={"/register"}> Sign-Up</Link>
          <Link to={"/login"}>Sign-in</Link>
      </div>
    </div>
  )
}

export default Nav