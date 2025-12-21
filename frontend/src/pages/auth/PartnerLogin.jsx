import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PartnerLogin = () => {
  e.preventDefu
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response.data);
    navigate("/create-food")

  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">Food partner</p>
          <h1 className="auth-title">Sign in to your dashboard</h1>
          <p className="auth-subtitle">Manage menus, orders, and payouts with one login.</p>
        </header>

        <form className="auth-form" onSubmit="{handleSubmit}">
          <div className="field">
            <label htmlFor="partnerEmail">Business email</label>
            <input id="partnerEmail" type="email" name="Email" placeholder="contact@restaurant.com" />
          </div>
          <div className="field">
            <label htmlFor="partnerPassword">Password</label>
            <input id="partnerPassword" type="password" password="Password" placeholder="••••••••" />
          </div>
          <div className="helper">
            <span>Use your partner credentials to access tools.</span>
          </div>
          <button type="submit" className="primary-btn">Sign in</button>
        </form>

        <div className="auth-footer">
          <span>New partner?</span>
          <Link to="/food-partner/register">Create account</Link>
        </div>
        <div className="divider">or</div>
        <div className="auth-footer">
          <span>Ordering instead?</span>
          <Link to="/user/login">Switch to user login</Link>
        </div>
      </section>
    </main>
  )
}

export default PartnerLogin