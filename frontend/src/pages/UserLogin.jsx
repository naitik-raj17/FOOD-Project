import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">User</p>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to pick up where you left off.</p>
        </header>

        <form className="auth-form">
          <div className="field">
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="userPassword">Password</label>
            <input id="userPassword" type="password" placeholder="••••••••" />
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