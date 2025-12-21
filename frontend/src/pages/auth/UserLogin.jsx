import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const navigate = useNavigate();
    const email = e.target.email.value;
    const passwrod = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password
    },{
      withCredentials:true
    });
    console.log(response.data);
    navigate("/");
  };
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">User</p>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to pick up where you left off.</p>
        </header>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field">
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" type="email" name="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="userPassword">Password</label>
            <input id="userPassword" type="password" name="password" placeholder="••••••••" />
          </div>
          <div className="helper">
            <span>Use your registered email and password.</span>
          </div>
          <button type="submit" className="primary-btn">Sign in</button>
        </form>

        <div className="auth-footer">
          <span>New here?</span>
          <Link to="/user/register">Create account</Link>
        </div>
        <div className="divider">or</div>
        <div className="auth-footer">
          <span>Want to partner?</span>
          <Link to="/food-partner/login">Partner sign in</Link>
        </div>
      </section>
    </main>
  )
}

export default UserLogin