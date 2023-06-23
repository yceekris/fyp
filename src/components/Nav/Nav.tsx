import { Link } from 'react-router-dom'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className="nav">
      <div className="s-name" id="s-name">Budgee</div>
      <div className="Chat">BudBoy</div>
      <div className="site-nav">
           <Link to={"/budget"}>Budget</Link>
           <Link to={"/dashboard"}>Profile</Link>
        
      </div>
      <div className="account">
          <Link to={"/register"}> Sign-Up</Link>
          <Link to={"/login"}>Sign-in</Link>
      </div>
    </div>
  )
}

export default Nav