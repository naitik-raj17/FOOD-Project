import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const UserRegister = () => {
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.userEmail.value;
    const phone = e.target.userPhone.value;
    const password = e.target.userPassword.value;

    await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName:firstName+ " "+ lastName,
      email,
      phone,
      password
    });
  }
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">User</p>
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Join to save favorites and track your orders.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="stacked">
            <div className="field">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" placeholder="Alex" />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" name="userEmail" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="userPhone">Phone (optional)</label>
            <input id="userPhone" name="userPhone" type="tel" placeholder="+91 9798xxxxxx" />
          </div>
          <div className="field">
            <label htmlFor="userPassword">Password</label>
            <input id="userPassword" name="userPassword" type="password" placeholder="••••••••" />
          </div>
          <div className="field">
            <label htmlFor="userConfirm">Confirm password</label>
            <input id="userConfirm" name="userConfirm" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="primary-btn">Sign up</button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/user/login">Sign in</Link>
        </div>
        <div className="divider">or</div>
        <div className="auth-footer">
          <span>Partnering with us?</span>
          <Link to="/food-partner/register">Register as partner</Link>
        </div>
      </section>
    </main>
  )
}

export default UserRegister