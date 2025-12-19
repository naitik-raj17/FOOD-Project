import React from 'react'
import { Link } from 'react-router-dom'

const PartnerRegister = () => {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">Food partner</p>
          <h1 className="auth-title">Become a partner</h1>
          <p className="auth-subtitle">List your menu and reach more hungry customers.</p>
        </header>

        <form className="auth-form">
          <div className="field">
            <label htmlFor="businessName">Business name</label>
            <input id="businessName" type="text" placeholder="Restaurant or brand name" />
          </div>
          <div className="stacked">
            <div className="field">
              <label htmlFor="contactName">Contact name</label>
              <input id="contactName" type="text" placeholder="Jane Smith" />
            </div>
            <div className="field">
              <label htmlFor="contactPhone">Phone</label>
              <input id="contactPhone" type="tel" placeholder="+1 555 987 6543" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="partnerEmail">Business email</label>
            <input id="partnerEmail" type="email" placeholder="contact@restaurant.com" />
          </div>
          <div className="field">
            <label htmlFor="partnerPassword">Password</label>
            <input id="partnerPassword" type="password" placeholder="••••••••" />
          </div>
          <div className="field">
            <label htmlFor="partnerConfirm">Confirm password</label>
            <input id="partnerConfirm" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="primary-btn">Create partner account</button>
        </form>

        <div className="auth-footer">
          <span>Already onboard?</span>
          <Link to="/food-partner/login">Sign in</Link>
        </div>
        <div className="divider">or</div>
        <div className="auth-footer">
          <span>Looking to order?</span>
          <Link to="/user/register">Create user account</Link>
        </div>
      </section>
    </main>
  )
}

export default PartnerRegister