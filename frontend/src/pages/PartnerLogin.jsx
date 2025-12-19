import React from 'react'
import { Link } from 'react-router-dom'

const PartnerLogin = () => {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">Food partner</p>
          <h1 className="auth-title">Sign in to your dashboard</h1>
          <p className="auth-subtitle">Manage menus, orders, and payouts with one login.</p>
        </header>

        <form className="auth-form">
          <div className="field">
            <label htmlFor="partnerEmail">Business email</label>
            <input id="partnerEmail" type="email" placeholder="contact@restaurant.com" />
          </div>
          <div className="field">
            <label htmlFor="partnerPassword">Password</label>
            <input id="partnerPassword" type="password" placeholder="••••••••" />
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